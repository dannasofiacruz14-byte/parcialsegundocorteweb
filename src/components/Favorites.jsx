export default function Favorites({ count }) {
  return (
    <div className="text-sm bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-700 text-gray-200">
      <span>Favoritas guardadas: </span>
      <strong className="text-red-500 font-bold">{count}</strong>
    </div>
  );
}