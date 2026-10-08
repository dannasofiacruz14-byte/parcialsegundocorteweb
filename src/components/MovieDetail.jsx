export default function MovieDetail({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div
      className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm flex justify-center items-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#fcfaf7] border border-[#e2d7c7] rounded-2xl max-w-lg w-full overflow-hidden p-6 relative shadow-2xl space-y-4 text-stone-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-[#eae2d6] text-stone-600 hover:text-stone-900 rounded-full w-8 h-8 flex items-center justify-center font-bold cursor-pointer"
        >
          ✕
        </button>
        <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover rounded-xl" />
        <div>
          <h2 className="text-2xl font-bold text-stone-900 mb-2">{movie.title}</h2>
          <div className="flex gap-4 text-xs text-stone-600 mb-3">
            <span><strong>Género:</strong> {movie.genre}</span>
            <span><strong>Año:</strong> {movie.year}</span>
            <span className="text-amber-600"><strong>Calificación:</strong> ⭐ {movie.rating}</span>
          </div>
          <p className="text-sm text-stone-700 leading-relaxed">{movie.description}</p>
        </div>
      </div>
    </div>
  );
}