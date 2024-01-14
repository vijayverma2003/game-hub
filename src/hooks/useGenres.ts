import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryFn: apiClient.getAll,
    queryKey: ["genres"],
    staleTime: ms("24 hours"),
    initialData: genres,
  });

export default useGenres;
