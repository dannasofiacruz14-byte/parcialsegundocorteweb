import MovieCard from "./MovieCard";

export default function MovieList({ movies, favorites, toggleFavorite, onSelectMovie, ratings, onRateMovie }) {
  if (movies.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400">
        <p className="text-xl font-medium">No se encontraron películas con los filtros seleccionados.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favorites.includes(movie.id)}
          toggleFavorite={toggleFavorite}
          onSelect={onSelectMovie} // 
          userRating={ratings[movie.id]}
          onRate={onRateMovie}
        />
      ))}
    </div>
  );
}