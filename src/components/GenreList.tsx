import React from "react";
import useGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedUrl from "../services/image-url";

const GenreList = () => {
  const { genres, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {genres.map((genre) => (
        <ListItem paddingY={"6px"} key={genre.id}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedUrl(genre.image_background)}
            />
            <Text fontSize={"large"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
