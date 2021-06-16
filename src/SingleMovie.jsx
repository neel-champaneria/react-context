const SingleMovie = (props) => {
  const { movie } = props;
  return (
    <div>
      <h2>{movie.name}</h2>
    </div>
  );
};

export default SingleMovie;
