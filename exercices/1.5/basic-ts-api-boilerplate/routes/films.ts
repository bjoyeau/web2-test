import { Router } from "express";

import { Film, NewFilm } from "../types";

const router = Router();

const defaultFilms: Film[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 146,
    budget: 160,
    description:
      "Un voleur, qui s'approprie les secrets des autres à travers leurs rêves, se voit offrir une chance de rédemption. Il doit implanter une idée dans l'esprit d'un PDG, une mission complexe qui implique des niveaux de rêves dans les rêves.",
  },
  {
    id: 2,
    title: "Titanic",
    director: "James Cameron",
    duration: 195,
    budget: 200,
  },
  {
    id: 3,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    duration: 152,
  },
];

/* Read all the films*/
//READ ALL FILTERED : Lire toutes les ressources de la collection selon le filtre donné
//READ ONE : Lire la ressource identifiée
//CREATE ONE : Créer une ressource basée sur les données de la requête

router.get("/", (req, res) => {
  // Validate 'order' query parameter
  if (req.query.order && typeof req.query.order !== "string") {
    return res.sendStatus(400);
  }

  // Filter by 'minimum-duration' if it exists
  let filteredFilms = defaultFilms;
  if (req.query["minimum-duration"]) {
    const minimumDuration = Number(req.query["minimum-duration"]);
    filteredFilms = filteredFilms.filter(
      (film) => film.duration >= minimumDuration
    );
  }

  // Return the filtered list
  return res.json(filteredFilms);
});

// Read the film identified by an id in the menu
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = defaultFilms.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }
  return res.json(film);
});

// CREATE ONE : Créer une ressource basée sur les données de la requête
router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 ||

    ("budget" in body && (
      typeof body.budget !== "number" || body.budget <= 0)
    ) ||
    ("description" in body && (
      typeof body.description !== "string" || !body.description.trim())
    ) ||
    ("imageUrl" in body && (
      typeof body.imageUrl !== "string" || !body.imageUrl.trim())
    )
    
  ) {
    return res.sendStatus(409);
  }

  const { title, director, duration, budget, description, imageUrl } =
    body as NewFilm;

  const nextId =
    defaultFilms.reduce(
      (maxId, film) => (film.id > maxId ? film.id : maxId),
      0
    ) + 1;

  const newFilm: Film = {
    id: nextId,
    title,
    director,
    duration,
    budget,
    description,
    imageUrl,
  };

  defaultFilms.push(newFilm);
  return res.json(newFilm);
});

export default router;
