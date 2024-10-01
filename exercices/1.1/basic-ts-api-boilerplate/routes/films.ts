import { Router } from "express";

import { Film } from "../types";

const router = Router();

const defaultFilms: Film[] = [
  {
    id: 1,
    title: "Inception",
    director:"Christopher Nolan",
    duration:146,
    budget:160,
    description:"Un voleur, qui s'approprie les secrets des autres à travers leurs rêves, se voit offrir une chance de rédemption. Il doit implanter une idée dans l'esprit d'un PDG, une mission complexe qui implique des niveaux de rêves dans les rêves.",
  },
  {
    id: 2,
    title: "Titanic",
    director:"James Cameron",
    duration:195,
    budget:200,
  },
  {
    id: 3,
    title: "The Dark Knight",
    director:"Christopher Nolan",
    duration:152,
  },
];

/* Read all the films*/

router.get("/", (req, res) => {

    if (req.query.order && typeof req.query.order !== "string") {
        return res.sendStatus(400);
    }
    else{return res.json(defaultFilms);}
    
});

export default router;
