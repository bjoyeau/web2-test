import express from "express";
import filmsRouter from "./routes/films";

let counter = 0;
const app = express();

app.use((req, _res, next) => {
    if (req.method === "GET") {
        counter++;
        console.log("GET counter:", counter);
    }
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/films", filmsRouter);

export default app;
