import { CoffeeType } from "@services/coffee/types.coffee";

export const filterCoffees = (coffees: CoffeeType[] | undefined , searchText: string) => {
    if (!coffees) return [];
    if (searchText === "") return coffees;
  
    return coffees.filter(coffee =>
      coffee.title.toLowerCase().includes(searchText.toLowerCase())
    );
  };