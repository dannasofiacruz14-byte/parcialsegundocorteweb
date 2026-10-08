export default function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Buscar película..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="bg-[#e6dcce] text-stone-900 placeholder-stone-500 px-4 py-2 rounded-lg border border-[#d2c2b0] focus:outline-none focus:border-red-600 w-full md:w-64"
    />
  );
}