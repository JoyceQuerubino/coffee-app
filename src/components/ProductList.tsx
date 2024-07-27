import React from 'react';
import { FlatList } from 'native-base';
import { ProductItem } from './ProductItem';
import { CoffeeType } from '@services/coffee/types.coffee';

interface ProductListProps {
  items: CoffeeType[];
}

export const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <FlatList
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