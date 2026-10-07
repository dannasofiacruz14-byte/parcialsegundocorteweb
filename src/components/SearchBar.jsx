export default function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Buscar película..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="bg-gray-800 text-white placeholder-gray-400 px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-red-500 w-full md:w-64"
    />
  );
}