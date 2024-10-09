import { Axios, AxiosRequestConfig } from "axios";
import { MASTODON_URL } from "src/mastodon-url";

const axiosConfig = <T = undefined>(): AxiosRequestConfig<T> => {
  return { baseURL: MASTODON_URL };
};

const newAxios = <T = undefined>(): Axios => new Axios(axiosConfig<T>());

export default newAxios();
