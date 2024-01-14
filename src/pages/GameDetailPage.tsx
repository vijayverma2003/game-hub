import { Navigate, useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ExpandableText from "../components/ExpandableText";
import CriticScore from "../components/CriticScore";
import DefinitionItem from "../components/DefinitionItem";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <div>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </div>
  );
};

export default GameDetailPage;
