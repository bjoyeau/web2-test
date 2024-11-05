import { Film } from "../../types"
interface MovieMenuProps {
  movies: Film[];
}

const MovieMenu = ({ movies }: MovieMenuProps) => {
  return (
    <table className="movie-menu">
      <thead>
        <tr>
          <th>Title</th>
          <th>Director</th>
          <th>Duration</th>
          <th>ImageUrl (optionel)</th>
          <th>Description (optionel)</th>
          <th>Budget (optionel)</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{movie.director}</td>
            <td>{movie.duration}</td>

            <td> <img src={movie.imageUrl} />
                {movie.imageUrl}
            </td>

            
            <td>{movie.description}</td>
            <td>{movie.budget}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieMenu;
