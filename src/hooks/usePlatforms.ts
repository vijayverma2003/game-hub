import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const fetchData = () =>
    apiClient
      .get<FetchResponse<Platform>>("platforms/lists/parents")
      .then((res) => res.data);

  return useQuery({
    queryKey: ["platforms"],
    queryFn: fetchData,
    staleTime: 24 * 60 * 60 * 1000, // 24 Hours
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
