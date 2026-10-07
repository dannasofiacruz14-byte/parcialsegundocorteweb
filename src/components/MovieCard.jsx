export default function MovieCard({ movie, isFavorite, toggleFavorite, onSelect, userRating, onRate }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200 shadow-lg">
      

      <img
        src={movie.image}
        alt={movie.title}
        onClick={() => onSelect(movie.id)}
        className="w-full h-72 object-cover cursor-pointer hover:opacity-90 transition-opacity"
      />

      <div className="p-4 flex flex-col gap-2 flex-grow justify-between">
        <div>
          {/*que abra al hacer clic en el título: */}
          <h3 
            onClick={() => onSelect(movie.id)} 
            className="font-bold text-lg text-white line-clamp-1 cursor-pointer hover:text-red-500"
          >
            {movie.title}
          </h3>
          <p className="text-xs text-gray-400">{movie.genre} • {movie.year}</p>
          <p className="text-sm font-semibold text-yellow-400 mt-1">⭐ {movie.rating} / 10</p>
        </div>

        <div className="space-y-3 mt-2">
          {/*presionar el botón de favorito se abra el modal por accidente */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(movie.id);
            }}
            className={`w-full py-2 px-3 rounded-lg text-xs font-bold transition-colors ${
              isFavorite
                ? "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700"
                : "bg-red-600 text-white hover:bg-red-700"
            }`}
          >
            {isFavorite ? " En Favoritos" : " Agregar a Favoritos"}
          </button>

          <div className="flex items-center justify-between text-xs text-gray-300" onClick={(e) => e.stopPropagation()}>
            <span>Mi calificación:</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => onRate(movie.id, star)}
                  className={`cursor-pointer text-base ${
                    star <= (userRating || 0) ? "text-yellow-400" : "text-gray-600 hover:text-yellow-200"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}