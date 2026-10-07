import { useState } from "react";
import { movies } from "./data/movies";
import Header from "./components/Header";
import Filters from "./components/Filters";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Favorites from "./components/Favorites";

export default function App() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    genre: "all",
    year: "all",
    minRating: 0,
    onlyFavorites: false,
  });
  const [favorites, setFavorites] = useState([]);
  const [ratings, setRatings] = useState({});
  const [selectedId, setSelectedId] = useState(null);

  const genres = [...new Set(movies.map((m) => m.genre))];
  const years = [...new Set(movies.map((m) => m.year))].sort((a, b) => b - a);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const handleRateMovie = (id, rating) => {
    setRatings((prev) => ({ ...prev, [id]: rating }));
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesQuery = movie.title.toLowerCase().includes(query.toLowerCase());
    const matchesGenre = filters.genre === "all" || movie.genre === filters.genre;
    const matchesYear = filters.year === "all" || movie.year === Number(filters.year);
    const matchesRating = movie.rating >= Number(filters.minRating);
    const matchesFavs = !filters.onlyFavorites || favorites.includes(movie.id);

    return matchesQuery && matchesGenre && matchesYear && matchesRating && matchesFavs;
  });

  // En App.jsx
const selectedMovie = movies.find((m) => Number(m.id) === Number(selectedId));

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <Header query={query} setQuery={setQuery} />
        
        <div className="flex flex-wrap justify-between items-center bg-gray-900 p-4 rounded-xl gap-4 border border-gray-800">
          <Filters filters={filters} setFilters={setFilters} genres={genres} years={years} />
          <Favorites count={favorites.length} />
        </div>

        <MovieList
          movies={filteredMovies}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          onSelectMovie={setSelectedId}
          ratings={ratings}
          onRateMovie={handleRateMovie}
        />

        {selectedMovie && (
          <MovieDetail movie={selectedMovie} onClose={() => setSelectedId(null)} />
        )}
      </div>
    </div>
  );
}