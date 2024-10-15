import type { GetState } from '../../container/types';
import { Axios, AxiosInstance } from "axios";
import * as axios from 'axios';
import { ApiClient } from '../apiClient';
import api from '@/api';

const apiClients: Record<string, ApiClient> = {};

export const buildApiClient = (config: axios.AxiosRequestConfig) => {

  const axios = new Axios(config) as AxiosInstance;
  const apiClient = new ApiClient(axios) as ApiClient & Record<string, any | ((...args: any[]) => any)>;

  apiClient["fcku"] = "fcku";

  apiClient["fuck"] = async (endpoint: string, getState?: GetState) => {
    return apiClient.get(endpoint);
  };

  return apiClient;
};

export type ApiClientBuilder = ReturnType<typeof buildApiClient>;
