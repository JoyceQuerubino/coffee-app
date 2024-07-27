import { api } from '@services/api';
import { SCOPES } from '@services/types.baseUrl';
import { CoffeesResponse } from './types.coffee';
import { CoffeeFactory } from './coffeeFactory';


export const fetchCoffeesService = async (): Promise<CoffeesResponse | any> => {
  try {
    const response = await api.get(`${SCOPES.COFFEE}/${SCOPES.HOT}`);
    return response.data?.map((coffeeData: any) => CoffeeFactory.createFromBackendData(coffeeData));
  } catch (error) {
    return error;
  }
};