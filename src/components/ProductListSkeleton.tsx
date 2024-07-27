import { testID } from "@tests/constants/testId";
import { HStack, Skeleton, VStack } from "native-base";

const ITEMS_NUMBER = 5;

const SingleProductSkeleton = () => (
  <HStack testID={testID.single_product_skeleton} w="100%" space={3} px={8} justifyContent="center">
    <Skeleton w="34%" h="20" rounded="md" />
    <Skeleton.Text w="70%" lines={4} />
  </HStack>
);

export function ProductListSkeleton() {
  return (
    <VStack testID={testID.product_list_skeleton} space={4}>
      {Array(ITEMS_NUMBER).fill("").map((_, index) => (
        <SingleProductSkeleton key={index} />
      ))}
    </VStack>
  );
}
