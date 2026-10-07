export default function Filters({ filters, setFilters, genres, years }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  return (
    <div className="flex flex-wrap items-center gap-4 text-sm">
      <select
        name="genre"
        value={filters.genre}
        onChange={handleChange}
        className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-700 focus:outline-none"
      >
        <option value="all">Todos los géneros</option>
        {genres.map((g) => <option key={g} value={g}>{g}</option>)}
      </select>

      <select
        name="year"
        value={filters.year}
        onChange={handleChange}
        className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-700 focus:outline-none"
      >
        <option value="all">Todos los años</option>
        {years.map((y) => <option key={y} value={y}>{y}</option>)}
      </select>

      <label className="flex items-center gap-2">
        <span>Mín Nota:</span>
        <input
          type="number"
          name="minRating"
          min="0"
          max="10"
          step="0.5"
          value={filters.minRating}
          onChange={handleChange}
          className="bg-gray-800 text-white px-2 py-1 w-16 rounded border border-gray-700 text-center"
        />
      </label>

      <label className="flex items-center gap-2 cursor-pointer font-medium select-none">
        <input
          type="checkbox"
          name="onlyFavorites"
          checked={filters.onlyFavorites}
          onChange={handleChange}
          className="w-4 h-4 accent-red-600 rounded"
        />
        <span>Solo favoritas </span>
      </label>
    </div>
  );
}