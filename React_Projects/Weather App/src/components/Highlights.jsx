export function Highlights({ data }) {
    if (!data) return null;

    const items = [
        { label: "Humidity", value: data.main.humidity + "%" },
        { label: "Wind", value: data.wind.speed + " km/h" },
        { label: "Pressure", value: data.main.pressure + " hPa" },
        { label: "Feels Like", value: data.main.feels_like + "°C" },
    ];
    return (
        <div className="grid grid-cols-4 gap-4">
            {items.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl shadow p-4">
                    <p className="text-gray-500 text-sm">{item.label}</p>
                    <h3 className="text-xl font-semibold mt-2">{item.value}</h3>
                </div>
            ))}

        </div>
    );
}
