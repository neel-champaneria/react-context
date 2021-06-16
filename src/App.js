import AddMovie from "./AddMovie";
import "./App.css";
import { MovieProvider } from "./MovieContext";
import MovieList from "./MovieList";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Nav />
        <AddMovie />
        <MovieList />
      </MovieProvider>
    </div>
  );
}

export default App;
