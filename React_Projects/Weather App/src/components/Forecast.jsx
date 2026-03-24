export function Forecast({ data }) {
  if (!data) return null;

  return (
    <div className="grid grid-cols-5 gap-4">
      {data
        .filter((item, index) => index % 8 === 0)
        .slice(0, 5)
        .map((item, i) => {
          const date = new Date(item.dt_txt);
          const day = date.toLocaleDateString("en-US", {
            weekday: "short",
          });

          return (
            <div
              key={i}
              className="bg-white rounded-2xl shadow p-4 text-center"
            >
              <p className="text-gray-500">{day}</p>

              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt="weather"
                className="mx-auto"
              />

              <p className="font-semibold">
                {Math.round(item.main.temp)}°C
              </p>
            </div>
          );
        })}
    </div>
  );
}