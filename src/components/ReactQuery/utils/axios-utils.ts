import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IHero } from "../interfaces";

const client = axios.create({
  baseURL: "http://localhost:4000",
});

export const request = ({ ...options }: AxiosRequestConfig<any>) => {
  client.defaults.headers.common.Authorization = `Bearer token`;
  const onSuccess = (res: AxiosResponse<IHero[], any>) => res;
  const onError = (error: any) => error;

  return client(options).then(onSuccess).catch(onError);
};
