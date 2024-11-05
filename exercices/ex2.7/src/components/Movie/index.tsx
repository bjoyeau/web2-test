import { SyntheticEvent, useState } from "react";
import { Film } from "../../types";
import MovieMenu from "./MovieMenu";

const defaultFilms: Film[] = [
  {
    id: 1,
    title: "ONE PIECE",
    director: "Echiro Oda",
    duration: 1130,
    description:
      "Luffy Roi des pirates Mgl",
    imageUrl: "https://bdi.dlpdomain.com/serie/visuel/BDA_12433/1-M480x680.jpg",
  },
  {
    id: 2,
    title: "GOODBYE JULIA",
    director: "Mohamed Kordofani",
    duration: 888,
    description:
      "A poignant drama that explores themes of love, loss, and the complex dynamics of human relationships in a deeply emotional narrative.",
  },
  {
    id: 3,
    title: "INCEPTION",
    director: "Christopher Nolan",
    duration: 332,
    description:
      "A mind-bending sci-fi thriller where a skilled thief, who enters people's dreams to steal secrets, is given a chance to have his criminal record erased if he can implant an idea into a target's subconscious.",
  },
  {
    id: 4,
    title: "PARASITE",
    director: "Bong Joon-ho",
    duration: 11,
    description:
      "An Oscar-winning dark comedy thriller that examines class disparities through the story of two families — one wealthy, the other destitute — and their increasingly complicated relationship.",
  },
  {
    id: 5,
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
    duration: 833,
    description:
      "A suspenseful thriller that follows a group of people who are under constant surveillance, leading them to uncover dark secrets about their observers and themselves.",
  },
];

const Main = () => {
  const [filmTitle, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState(0); // Durée
  const [imageUrl, setImageUrl] = useState(""); // Lien vers une image
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0); // Budget
  const [films, setFilms] = useState(defaultFilms);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const newFilm: Film = {
      id: nextFilmId(films),
      title: filmTitle,
      director,
      duration,
      imageUrl,
      description,
      budget,
    };

    setFilms([...films, newFilm]);


    setTitle("");
    setDirector("");
    setDuration(0);
    setImageUrl("");
    setDescription("");
    setBudget(0);
  };

  const handleTitleChange = (e: SyntheticEvent) => {
    const titleInput = e.target as HTMLInputElement;
    console.log("change in titleInput:", titleInput.value);
    setTitle(titleInput.value);
  };

  const handleDirectorChange = (e: SyntheticEvent) => {
    const directorInput = e.target as HTMLInputElement;
    console.log("change in directorInput:", directorInput.value);
    setDirector(directorInput.value);
  };

  const handleDurationChange = (e: SyntheticEvent) => {
    const durationInput = e.target as HTMLInputElement;
    console.log("change in durationInput:", durationInput.value);
    const duration = parseInt(durationInput.value);
    setDuration(duration);
  };

  const handleImageUrlChange = (e: SyntheticEvent) => {
    const imageUrlInput = e.target as HTMLInputElement;
    console.log("change in imageUrlInput:", imageUrlInput.value);
    setImageUrl(imageUrlInput.value);
  };

  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    console.log("change in descriptionInput:", descriptionInput.value);
    setDescription(descriptionInput.value);
  };

  const handleBudgetChange = (e: SyntheticEvent) => {
    const budgetInput = e.target as HTMLInputElement;
    console.log("change in budgetInput:", budgetInput.value);
    const budget = parseInt(budgetInput.value);
    setBudget(budget);
  };

  return (
    <main>
      <p>My Favorite Films</p>
      <MovieMenu movies={films} />
      <div>
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Titre</label>
          <input
            value={filmTitle}
            type="text"
            id="title"
            name="title"
            onChange={handleTitleChange} // Utilisation du gestionnaire de changement
            required
          />
          <label htmlFor="director">Directeur</label>
          <input
            value={director}
            type="text"
            id="director"
            name="director"
            onChange={handleDirectorChange} // Utilisation du gestionnaire de changement
            required
          />
          <label htmlFor="duration">Durée (en minutes)</label>
          <input
            value={duration}
            type="number"
            id="duration"
            name="duration"
            onChange={handleDurationChange} // Utilisation du gestionnaire de changement
            required
          />
          <label htmlFor="imageUrl">Lien vers une image (facultatif)</label>
          <input
            value={imageUrl}
            type="text"
            id="imageUrl"
            name="imageUrl"
            onChange={handleImageUrlChange} // Utilisation du gestionnaire de changement
          />
          <label htmlFor="description">Description (facultatif)</label>
          <input
            value={description}
            type="text"
            id="description"
            name="description"
            onChange={handleDescriptionChange} // Utilisation du gestionnaire de changement
          />
          <label htmlFor="budget">Budget (en millions, facultatif)</label>
          <input
            value={budget}
            type="number"
            id="budget"
            name="budget"
            onChange={handleBudgetChange} // Utilisation du gestionnaire de changement
          />
          <button type="submit">Ajouter Film</button>
        </form>
      </div>
    </main>
  );
};

const nextFilmId = (films: Film[]) => {
  return films.reduce((maxId, film) => Math.max(maxId, film.id), 0) + 1;
};

export default Main;
