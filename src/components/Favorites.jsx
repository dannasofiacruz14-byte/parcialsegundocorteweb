export default function Favorites({ count }) {
  return (
    <div className="text-sm bg-[#e6dcce] px-3 py-1.5 rounded-lg border border-[#d2c2b0] text-stone-800 font-medium">
      <span>Favoritas guardadas: </span>
      <strong className="text-red-600 font-bold">{count}</strong>
    </div>
  );
}