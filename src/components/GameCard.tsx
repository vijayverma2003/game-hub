import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Card>
        <Image src={getCroppedUrl(game.background_image)} />
        <CardBody>
          <HStack marginBottom={3} justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
