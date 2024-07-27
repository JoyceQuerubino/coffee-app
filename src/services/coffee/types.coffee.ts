export interface CoffeesResponse {
    title: string;
    description: string;
    ingredient?: string[];
    image: string;
    id: number;
}

export type CoffeeType = CoffeesResponse;