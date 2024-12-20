import MovieListView from "../MovieItem/MovieListView";
import PageTitle from "../PageItem/PageTitle";
import { MovieContext } from "../../types";
import { useOutletContext } from "react-router-dom";

const MovieListPage = () => {
  const { movies, onMovieDeleted }: MovieContext = useOutletContext();

  return (
    <div>
      <PageTitle title="My favorite movies" />

      <MovieListView movies={movies} onMovieDeleted={onMovieDeleted} />

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MovieListPage;
