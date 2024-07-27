import React from "react";
import { ImageSourcePropType } from "react-native";
import { VStack, Heading, Image } from "native-base";
import {testID} from "@tests/constants/testId";

interface EmptyComponentType {
  title: string;
  image: ImageSourcePropType | undefined;
}

export const EmptyComponent = ({ title, image }: EmptyComponentType) => {
  return (
    <VStack flex={1} space={4} py={8} justifyContent={"center"} alignItems="center" mb={4}>
      <Image testID={testID.empty_image} source={image} alt="Coffee error" size="lg" />
      <Heading size="md"  color="secondary.500">
        {title}
      </Heading>
    </VStack>
  );
};
