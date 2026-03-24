export function Sidebar({ active, setActive }) {
  const menu = ["Dashboard", "Forecast","History"];
  return (
    <div className="col-span-2 bg-white rounded-2xl shadow p-4 flex flex-col gap-6">
      <h2 className="text-xl font-bold bg-cover   py-2">Weather App</h2>

      <nav className="flex h-full flex-col gap-4">
        {menu.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`text-left ${
              active === item
                ? "text-black font-medium"
                : "text-gray-600"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
}