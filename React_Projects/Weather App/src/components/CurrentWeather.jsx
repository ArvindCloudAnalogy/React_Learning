export function CurrentWeather({data}) {
  if(!data) return <div>Loading...</div>
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">{data.name}</h2>
        <p className="text-gray-500">{data.weather[0].main}</p>
        <h1 className="text-4xl font-bold mt-2">
          {Math.round(data.main.temp)}
          </h1>
      </div>
      <div className="text-6xl">☀️</div>
    </div>
  );
}