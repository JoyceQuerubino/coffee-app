import { useQuery } from '@tanstack/react-query';
import { fetchCoffeesService } from '@services/coffee/coffeeServices';
import { reactQueryConstants } from '@services/reactQueryConstants';

export const useListCoffees = () => {
    return useQuery({
      queryKey: [reactQueryConstants.COFFEES],
      queryFn: async () => await fetchCoffeesService(),
      retry: 3,
      staleTime: 30000,
      select: coffe => coffe,
    });
  };