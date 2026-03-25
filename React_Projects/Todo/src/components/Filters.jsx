import { FILTERS } from "../constants/Filter";

export default function Filter({ filter, setFilter }) {
  return (
    <div className="flex justify-center gap-2 mb-4">
      {Object.values(FILTERS).map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded-lg border ${
            filter === f
              ? "bg-blue-500 text-white"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}