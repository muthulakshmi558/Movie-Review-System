const FilterBar = ({ genres, onFilter, onSearch, onSort }) => (
  <div className="flex flex-wrap gap-4 mb-6 items-center">
    <select onChange={e => onFilter(e.target.value)} className="p-2 border rounded shadow">
      <option value="">All Genres</option>
      {genres.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
    </select>

    <input
      type="text"
      placeholder="Search by movie or actor"
      onChange={e => onSearch(e.target.value)}
      className="p-2 border rounded flex-1 shadow"
    />

    <select onChange={e => onSort(e.target.value)} className="p-2 border rounded shadow">
      <option value="rating">Sort by Rating</option>
      <option value="date">Sort by Date</option>
    </select>
  </div>
);

export default FilterBar;
