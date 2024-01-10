import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  params: {
    key: "efb3757f07b84a2285e8e9e6ede5a1d0",
  },
  baseURL: "https://api.rawg.io/api",
});

class APIClient<T> {
  constructor(public endpoint: string) {}

  getAll = async (params?: AxiosRequestConfig<any>) => {
    const response = await axiosInstance.get<FetchResponse<T>>(
      this.endpoint,
      params
    );

    return response.data;
  };
}

export default APIClient;
