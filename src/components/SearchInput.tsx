import { BsSearch } from "react-icons/bs";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import useGameQuery from "../stores/gameQueryStore";

const SearchInput = () => {
  const setSearchText = useGameQuery((s) => s.setSearchText);

  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Games..."
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
