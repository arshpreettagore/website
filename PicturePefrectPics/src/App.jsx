import { useState } from "react";
import "./App.css";
const movieData = [
  { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },
  { id: 2, title: "Interstellar", director: "Christopher Nolan", year: 2014 },
  {
    id: 3,
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    year: 1999,
  },
  { id: 4, title: "Parasite", director: "Bong Joon Ho", year: 2019 },
  {
    id: 5,
    title: "Avengers: Endgame",
    directors: "Anthony Russo, Joe Russo",
    year: 2019,
  },
];

const App = () => {
  const [movies, setMovies] = useState(movieData);

  return (
    <div>
      <h1>Movie Recommendations</h1>
      <div className="movie-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <p>Directed by: {movie.director}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
