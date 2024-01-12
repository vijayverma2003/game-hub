import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCroppedUrl from "../services/image-url";
import useGameQuery from "../stores/gameQueryStore";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const genreId = useGameQuery((s) => s.genreId);
  const setGenre = useGameQuery((s) => s.setGenre);

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem paddingY={"6px"} key={genre.id}>
            <HStack>
              <Image
                objectFit={"cover"}
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedUrl(genre.image_background)}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genreId === genre.id ? "bold" : "normal"}
                onClick={() => setGenre(genre.id)}
                variant={"link"}
                fontSize={"large"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
