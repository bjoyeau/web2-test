interface MovieProps {
  movie: MovieInterface;
}

interface MovieInterface {
  title: string;
  director: string;
}

const Movie = (props: MovieProps) => {
  return (
    <p>
      {props.movie.title}
      {props.movie.director}
    </p>
  );
};

export default Movie;
