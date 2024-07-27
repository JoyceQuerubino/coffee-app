import React from 'react';
import { FlatList } from 'native-base';
import { CoffeeType } from '@services/coffee/types.coffee';
import { testID } from '@tests/constants/testId';
import { ProductItem } from './ProductItem';

interface ProductListProps {
  items: CoffeeType[];
}

export const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <FlatList
      testID={testID.product_list}
      p={4}
      data={items}
      renderItem={({ item }) => (
        <ProductItem
          id={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};