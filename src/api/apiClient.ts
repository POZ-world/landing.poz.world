import { AxiosInstance, AxiosRequestConfig as Config } from "axios";
import * as axios from "axios";

class ApiClient {
  constructor(private readonly axios: AxiosInstance) {}

  public async get<T>(url: string): Promise<T> {
    const response = await this.axios.get<T>(url);
    return response.data;
  }

  public async post<T>(url: string, data: any): Promise<T> {
    const response = await this.axios.post<T>(url, data);
    return response.data;
  }

  public async put<T>(url: string, data: any): Promise<T> {
    const response = await this.axios.put<T>(url, data);
    return response.data;
  }

  public async delete<T>(url: string): Promise<T> {
    const response = await this.axios.delete<T>(url);
    return response.data;
  }

  public async patch<T>(url: string, data: any): Promise<T> {
    const response = await this.axios.patch<T>(url, data);
    return response.data;
  }

  public async head(url: string): Promise<axios.AxiosHeaders> {
    // Head request doesn't return a body, only headers.
    return (await this.axios.head(url)).headers as axios.AxiosHeaders;
  }

  public async options<T>(url: string): Promise<T> {
    const response = await this.axios.options<T>(url);
    return response.data;
  }

  public async request<T>(config: Config): Promise<T> {
    const response = await this.axios.request<T>(config);
    return response.data;
  }
}

export { ApiClient };
