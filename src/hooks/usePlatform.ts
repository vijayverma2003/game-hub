import usePlatforms from "./usePlatforms";

function usePlatform(id?: number) {
  const { data } = usePlatforms();

  return data?.results.find((platform) => platform.id === id);
}

export default usePlatform;
