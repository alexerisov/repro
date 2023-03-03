import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from "axios";
import { getLogger } from "loglevel";
import { getSession } from "next-auth/react";

const log = getLogger("axios");
log.setLevel("error");

const onRequest = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const session = await getSession();
  console.debug({ session });
  // if (session) {
  //   config.auth = {
  //     username: session.credentials.username,
  //     password: session.credentials.password
  //   };
  // }
  log.info("[RequestInterceptor]", config);
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  log.error("[RequestInterceptor]", error);
  return Promise.reject(error);
};

const onResponse = <T>(
  response: AxiosResponse
): Promise<AxiosResponse["data"]> => {
  log.info("[ResponseInterceptor]", response);
  return response?.data;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  log.error("[ResponseInterceptor] ", error);
  return Promise.reject(error);
};

function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}

const defaultOptions = {
  baseURL: process.env.BASE_URL,
  timeout: 10 * 1000
};

const create = axios.create(defaultOptions);
export const createInstance = () => setupInterceptorsTo(create);
export const axiosInstance = createInstance();
