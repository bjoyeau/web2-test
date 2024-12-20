import { Movie } from "../../types";
import MovieItem from "../MovieItem/MovieItem";

interface CinemaProps {
  name: string;
  movies: Movie[];
}

const Cinema = (props: CinemaProps) => (
  <div>
    <h2>{props.name}</h2>
    <ul>
      {props.movies.map((movie) => (
        <MovieItem key={movie.title} movie={movie} />
      ))}
    </ul>
  </div>
);

export default Cinema;