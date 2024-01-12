import { BsChevronDown } from "react-icons/bs";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useGameQuery from "../stores/gameQueryStore";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  const platformId = useGameQuery((s) => s.platformId);
  const setPlatform = useGameQuery((s) => s.setPlatform);

  const platform = usePlatform(platformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => setPlatform()}>All</MenuItem>
        {data?.results.map((platform) => (
          <MenuItem onClick={() => setPlatform(platform.id)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
