/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from "express";
import { Drink, NewDrink } from "../types";

const router = express.Router();

// Sample drinks array with a few drinks
const drinks: Drink[] = [
  { id: 1, title: "Coca Cola", price: 2 },
  { id: 2, title: "Pepsi", price: 3 },
  { id: 3, title: "Fanta", price: 5 },
];

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const drink = drinks.find((drink) => drink.id === id);
  if (!drink) {
    return res.sendStatus(404);
  }
  return res.json(drink);
});

router.get("/", (req, res) => {
  if (!req.query["budget-max"]) {
    // Cannot call req.query.budget-max as "-" is an operator
    return res.json(drinks);
  }
  const budgetMax = Number(req.query["budget-max"]);
  const filteredDrinks = drinks.filter((drink) => {
    return drink.price <= budgetMax;
  });
  return res.json(filteredDrinks);
});

router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("image" in body) ||
    !("volume" in body) ||
    !("price" in body) ||
    typeof body.title !== "string" ||
    typeof body.image !== "string" ||
    typeof body.volume !== "number" ||
    typeof body.price !== "number" ||
    !body.title.trim() ||
    !body.image.trim() ||
    body.volume <= 0 ||
    body.price <= 0
  ) {
    return res.sendStatus(400);
  }

  const { title, image, volume, price } = body as NewDrink;

  const nextId =
    drinks.reduce((maxId, drink) => (drink.id > maxId ? drink.id : maxId), 0) +
    1;

  const newDrink: Drink = {
    id: nextId,
    title,
    image,
    volume,
    price,
  };

  drinks.push(newDrink);
  return res.json(newDrink);
});

export default router;
