import SearchBar from "./SearchBar";

export default function Header({ query, setQuery }) {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-4 gap-4">
      <h1 className="text-3xl font-bold tracking-wide text-red-600"> Catálogo de Películas</h1>
      <SearchBar query={query} setQuery={setQuery} />
    </header>
  );
}