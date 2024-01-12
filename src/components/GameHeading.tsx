import { Heading } from "@chakra-ui/react";
import useGameQuery from "../stores/gameQueryStore";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

const GameHeading = () => {
  const genreId = useGameQuery((s) => s.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQuery((s) => s.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading marginY={5} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
