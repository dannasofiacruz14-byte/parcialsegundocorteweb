export default function MovieCard({ movie, isFavorite, toggleFavorite, onSelect, userRating, onRate }) {
  return (
    <div
      onClick={() => onSelect(movie.id)}
      className="bg-white border border-[#e2d7c7] rounded-xl overflow-hidden flex flex-col justify-between hover:scale-[1.02] transition-transform duration-200 shadow-sm cursor-pointer hover:shadow-md"
    >
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-72 object-cover hover:opacity-95 transition-opacity"
      />
      
      <div className="p-4 flex flex-col gap-2 flex-grow justify-between bg-[#fffefb]">
        <div>
          <h3 className="font-bold text-lg text-stone-900 line-clamp-1">{movie.title}</h3>
          <p className="text-xs text-stone-500">{movie.genre}  {movie.year}</p>
          <p className="text-sm font-semibold text-amber-600 mt-1"> {movie.rating} / 10</p>
        </div>

        <div className="space-y-3 mt-2">
          {/* Botón de Favoritos */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(movie.id);
            }}
            className={`w-full py-2 px-3 rounded-lg text-xs font-bold transition-colors ${
              isFavorite
                ? "bg-[#e2d7c7] text-stone-800 border border-[#cbbba6] hover:bg-[#d6c7b3]"
                : "bg-red-600 text-white hover:bg-red-700"
            }`}
          >
            {isFavorite ? " En Favoritos" : " Agregar a Favoritos"}
          </button>

          {/* Calificación de Estrellas */}
          <div
            className="flex items-center justify-between text-xs text-stone-700"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Mi calificación:</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => onRate(movie.id, star)}
                  className={`cursor-pointer text-base ${
                    star <= (userRating || 0) ? "text-amber-500" : "text-stone-300 hover:text-amber-300"
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