import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryFn: apiClient.getAll,
    queryKey: ["genres"],
    staleTime: 24 * 60 * 60 * 1000, // 24 Hours
    initialData: genres,
  });

export default useGenres;
