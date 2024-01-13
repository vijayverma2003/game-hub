import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .3s ease-in-out",
      }}
      scale={1.0}
      borderRadius="10px"
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
