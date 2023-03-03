import { LoginPage } from "@src/pages/login";
import { GetServerSideProps } from "next";
import { getToken } from "next-auth/jwt";

export default LoginPage;

export const getServerSideProps: GetServerSideProps = async context => {
  const redirectUrl = context.query?.callbackUrl || "/";
  const token = await getToken(context);

  if (token) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    };
  }

  return {
    props: {
      redirectUrl
    }
  };
};
