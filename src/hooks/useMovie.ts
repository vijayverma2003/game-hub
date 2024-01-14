import { useQuery } from "@tanstack/react-query";
import Movie from "../entities/Movie";
import APIClient, { FetchResponse } from "../services/api-client";

const useMovie = (gameId: number) => {
  const apiClient = new APIClient<Movie>(`/games/${gameId}/movies`);

  return useQuery({
    queryFn: apiClient.getAll,
    queryKey: [gameId, "movies"],
  });
};

export default useMovie;
