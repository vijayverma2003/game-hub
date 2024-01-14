import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import Game  from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

function useGame(slug: string) {
  return useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24 hours"),
  });
}

export default useGame;
