export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search by title..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="flex-1 w-full border-2 border-amber-300 bg-white rounded-lg px-4 py-2 focus:outline-none focus:border-green-600"
    />
  );
}
