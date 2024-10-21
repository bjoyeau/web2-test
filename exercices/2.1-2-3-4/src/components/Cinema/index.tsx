import Movie from "../Movie";

interface MovieInterface {
  title: string;
  director: string;
}

interface CinemaProps {
  name: string;
  movies: MovieInterface[];
}

const Cinema = (props: CinemaProps) => {
  return (
    <div>
      <h1>{props.name}</h1>
      {props.movies.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
};

export default Cinema;
