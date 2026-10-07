export default function MovieDetail({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 border border-gray-800 rounded-2xl max-w-lg w-full overflow-hidden p-6 relative shadow-2xl space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-800 text-gray-300 hover:text-white rounded-full w-8 h-8 flex items-center justify-center font-bold cursor-pointer"
        >
          
        </button>
        <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover rounded-xl" />
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">{movie.title}</h2>
          <div className="flex gap-4 text-xs text-gray-400 mb-3">
            <span><strong>Género:</strong> {movie.genre}</span>
            <span><strong>Año:</strong> {movie.year}</span>
            <span className="text-yellow-400"><strong>Calificación:</strong>  {movie.rating}</span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">{movie.description}</p>
        </div>
      </div>
    </div>
  );
}