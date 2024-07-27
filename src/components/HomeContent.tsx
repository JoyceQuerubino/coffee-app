import React from "react";
import { ProductList } from "@components/ProductList";
import { EmptyComponent } from "@components/EmptyComponent";
import { ProductListSkeleton } from "@components/ProductListSkeleton";
import { CoffeeType } from "@services/coffee/types.coffee";
import coffeeImage from '@assets/coffee.png'; 


interface ContentProps {
  isLoading: boolean;
  isError: boolean;
  coffees?: CoffeeType[]; 
}

export const HomeContent: React.FC<ContentProps> = ({ isLoading, isError, coffees }) => {
  if (isLoading) return <ProductListSkeleton />;
  if (isError) return <EmptyComponent title="Sorry! We had a problem" image={coffeeImage}/>;
  return <ProductList items={coffees || []} />;
};