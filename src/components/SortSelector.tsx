import { BsChevronDown } from "react-icons/bs";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useGameQuery from "../stores/gameQueryStore";

const SortSelector = () => {
  const sortOrder = useGameQuery((s) => s.sortOrder);
  const setSortOrder = useGameQuery((s) => s.setSortOrder);

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Released Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            onClick={() => setSortOrder(sortOrder.value)}
            key={sortOrder.value}
            value={sortOrder.value}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
