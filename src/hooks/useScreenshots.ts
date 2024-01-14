import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Screenshot } from "../entities/Screenshot";

function useScreenshots(gameId: number) {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery<FetchResponse<Screenshot>, Error>({
    queryKey: [gameId, "screenshots"],
    queryFn: apiClient.getAll,
  });
}

export default useScreenshots;
