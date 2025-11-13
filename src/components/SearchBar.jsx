export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search memes..."
      className="border rounded-md p-2 w-1/2"
    />
  );
}
