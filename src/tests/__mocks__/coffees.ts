import { CoffeeType } from "@services/coffee/types.coffee";

export const mockCoffees: CoffeeType[] = [
  {
    description:
      "Svart kaffe är så enkelt som det kan bli med malda kaffebönor dränkta",
    id: 1,
    image:
      "https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredient: undefined,
    title: "Black Coffee",
  },
  {
    description:"Som den mest populära kaffedrycken där ute består latte av en skvätt espresso.",
    id:2,
    image:"https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww",
    ingredient: undefined,
    title:"Latte"
 },
 {
    description:"Om du gillar latte med en speciell smak kan karamell latte.",
    id:3,
    image:"https://images.unsplash.com/photo-1599398054066-846f28917f38?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredient: undefined,
    title:"Caramel Latte"
 },
];

export const filteredLatte: CoffeeType[] = [
  {
    description:"Som den mest populära kaffedrycken där ute består latte av en skvätt espresso.",
    id:2,
    image:"https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww",
    ingredient: undefined,
    title:"Latte"
 },
 {
    description:"Om du gillar latte med en speciell smak kan karamell latte.",
    id:3,
    image:"https://images.unsplash.com/photo-1599398054066-846f28917f38?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredient: undefined,
    title:"Caramel Latte"
 },
]

export const mockCoffee: CoffeeType = {
  description:"Som den mest populära kaffedrycken där ute består latte av en skvätt espresso.",
  id:2,
  image:"https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww",
  ingredient: undefined,
  title:"Latte"
}
