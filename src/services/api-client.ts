import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

const axiosInstance = axios.create({
  params: {
    key: "efb3757f07b84a2285e8e9e6ede5a1d0",
  },
  baseURL: "https://api.rawg.io/api",
});

class APIClient<T> {
  constructor(public endpoint: string) {}

  get = async (id: number | string) => {
    const response = await axiosInstance.get<T>(this.endpoint + "/" + id);
    return response.data;
  };

  getAll = async (params?: AxiosRequestConfig<any>) => {
    const response = await axiosInstance.get<FetchResponse<T>>(
      this.endpoint,
      params
    );

    return response.data;
  };
}

export default APIClient;
