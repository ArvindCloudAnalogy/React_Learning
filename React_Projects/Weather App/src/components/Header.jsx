import { useState } from "react";

export function Header({ fetchWeather }) {
  const [input, setinput] = useState("")

  const handleSearch = () => {
    fetchWeather(input);

  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchWeather(input);
    }
  };


  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold ">Weather Dashboard</h1>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input

            type="text"
            value={input}
            onKeyDown={handleKeyDown}
            onChange={(e) => { setinput(e.target.value) }}
            placeholder="Search city..."
            className="pl-9 pr-3 py-2 border rounded-lg outline-none"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>
        <button
          onClick={handleSearch}
          className=" active:scale-[99%] px-6 py-2 bg-blue-600 text-white rounded-lg">
          °C
        </button>
      </div>
    </div>
  );
}