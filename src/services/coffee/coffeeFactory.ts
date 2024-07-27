// factories/profileFactory.js
import { CoffeesResponse, CoffeeType } from './types.coffee';

export const getCoffee = ({
    title,
    description,
    ingredient,
    image,
    id
  }: CoffeesResponse): CoffeeType => ({
    title,
    description,
    ingredient,
    image,
    id
  });

  export const CoffeeFactory = {
    createFromBackendData: (data: any): CoffeesResponse => getCoffee(data)
  };
