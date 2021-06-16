import { useContext } from "react";
import { MovieContext } from "./MovieContext";
import SingleMovie from "./SingleMovie";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      {movies.map((movie) => (
        <SingleMovie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
