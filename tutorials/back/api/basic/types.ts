interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface Drink {
  id: number;
  title: string;
  price: number;
  image?: string;
  volume?: number;
}
type NewDrink = Omit<Drink, "id">;

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

type NewPizza = Omit<Pizza, "id">;

export type { Pizza, NewPizza, PizzaToUpdate, Drink, NewDrink};
