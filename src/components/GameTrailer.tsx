import useMovie from "../hooks/useMovie";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useMovie(gameId);

  if (isLoading) return <Spinner />;
  if (error || !data) throw error;

  const first = data?.results[0];
  return first ? (
    <video src={first.data["480"]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
