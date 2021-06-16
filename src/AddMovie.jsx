import { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const onChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else {
      setPrice(e.target.value);
    }
  };

  const addMovie = (e) => {
    e.preventDefault();
    let id =
      Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 1000);
    setMovies((prevMovies) => [
      ...prevMovies,
      { name: name, price: price, id: id },
    ]);
    console.log(name, price, id);
  };

  return (
    <form onSubmit={addMovie}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => onChange(e)}
      />
      <input
        type="text"
        name="price"
        value={price}
        onChange={(e) => onChange(e)}
      />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
