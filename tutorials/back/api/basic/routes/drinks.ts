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


router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = drinks.findIndex((drink) => drink.id === id);
  if (index === -1) {
    return res.sendStatus(404);
  }
  const deletedElements = drinks.splice(index, 1); // splice() returns an array of the deleted elements
  return res.json(deletedElements[0]);
});


router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const drink = drinks.find((drink) => drink.id === id);
  if (!drink) {
    return res.sendStatus(404);
  }

  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("image" in body &&
      (typeof body.image !== "string" || !body.image.trim())) ||
    ("volume" in body &&
      (typeof body.volume !== "number" || body.volume <= 0)) ||
    ("price" in body && 
      (typeof body.price !== "number" || body.price <= 0))
  ) {
    return res.sendStatus(400);
  }

  const { title, image, volume, price }: Partial<NewDrink> = body;

  if (title) {
    drink.title = title;
  }
  if (image) {
    drink.image = image;
  }
  if (volume) {
    drink.volume = volume;
  }
  if (price) {
    drink.price = price;
  }

  return res.json(drink);
});


export default router;
