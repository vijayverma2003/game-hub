import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  params: {
    key: "efb3757f07b84a2285e8e9e6ede5a1d0",
  },
  baseURL: "https://api.rawg.io/api",
});
