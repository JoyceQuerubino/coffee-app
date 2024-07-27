import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Input,
  Icon,
  HStack,
} from "native-base";

interface SearchItemType {
  setSearchText: (text: string) => void;
}

export const SearchItem = ({ setSearchText }: SearchItemType) => {
  return (
    <HStack flexDirection="row" alignItems="center" mb={4}>
      <Input
        bg="dark.900"
        placeholder="Search"
        width="100%"
        borderRadius="4"
        py="3"
        px="1"
        fontSize="14"
        _focus={{
          borderColor: "primary.500",
          bg: "dark.900",
        }}
        onChangeText={(text) => setSearchText(text)}
        InputLeftElement={
          <Icon
            m="2"
            ml="3"
            size="6"
            color="primary.500"
            as={<MaterialIcons name="search" />}
          />
        }
      />
    </HStack>
  );
};
