import React from 'react';
import { Box, HStack, VStack, Text, Image } from 'native-base';
import { CoffeeType } from '@services/coffee/types.coffee';
import { testID } from '@tests/constants/testId';

export const ProductItem = ({ image, title, description }: CoffeeType) => {
  return (
    <Box testID={testID.product_item} flex={1} borderBottomWidth={1} borderColor="coolGray.200" py={2}>
    <HStack  space={4} alignItems="center" >
      <Image size="md" source={{ uri: image }} alt={title} flex={1} />
      <VStack flex={2}>
        <Text numberOfLines={1} ellipsizeMode="tail" bold>{title}</Text>
        <Text numberOfLines={3} ellipsizeMode="tail">{description}</Text>
      </VStack>
    </HStack>
  </Box>
  );
};
