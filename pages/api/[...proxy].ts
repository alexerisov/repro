import httpProxy from "http-proxy";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false
  }
};
export default async function proxy(req: NextApiRequest, res: NextApiResponse) {
  // В этом месте проблема. После авторизации, pageEvent стартует запрос на апи, и req который сюда приходит содержит куки
  // но после обновления страницы pageEvent опять стартует запрос, но req сюда приходит пустой (отсуствуют cookie).
  const token = await getToken({ req });
  console.debug("proxy req", req);

  if (!token) {
    return res
      .status(401)
      .json({ error: "Proxy did not find auth credentials" });
  }

  return new Promise((resolve, reject) => {
    const proxy: httpProxy = httpProxy.createProxy();
    req.url = req?.url?.replace("/api", "");
    proxy.once("proxyRes", resolve).once("error", reject).web(req, res, {
      changeOrigin: true,
      target: process.env.API_URL
    });
  });
}
