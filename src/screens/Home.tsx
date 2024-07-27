import React, { useMemo, useState } from "react";
import { Box, Button, Center, Heading, VStack } from "native-base";
import { SearchItem } from "@components/SearchItem";
import { useListCoffees } from "@hooks/useListCoffees";
import { HomeContent } from "@components/HomeContent";
import { filterCoffees } from "@helpers/filterCoffees";

export function Home() {
  const { data: coffees, isLoading, isError, refetch } = useListCoffees();
  const [searchText, setSearchText] = useState("");

  const handleRefetch = () => {
    refetch();
  };

  const filteredCoffees = useMemo(() => filterCoffees(coffees, searchText), [searchText, coffees]);

  return (
    <VStack space={4} flex={1} bg="trueGray.50">
      <Center safeAreaTop bg="secondary.500" p={4}>
        <Heading size="xl" pb={4} color="dark.900">
          Coffee Page
        </Heading>
        <SearchItem setSearchText={setSearchText}/>
      </Center>

      <HomeContent isLoading={isLoading} isError={isError} coffees={filteredCoffees}/>

      <Box safeAreaBottom px={8}>
        <Button
          onPress={handleRefetch}
          bg="primary.500"
          borderRadius={8}
          py={3}
        >
          Refresh
        </Button>
      </Box>
    </VStack>
  );
}
