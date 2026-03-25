import { Header } from "../components/Header";
import { CurrentWeather } from "../components/CurrentWeather";
import { Forecast } from "../components/Forecast";
import { Highlights } from "../components/Highlights";
import { useEffect, useState } from "react";
import { getWeather, getForecast } from "../api/weather";

export default function Dashboard() {
    const [city, setCity] = useState("Noida");
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);


    const fetchWeather = async (searchCity = city) => {
        try {
            const weatherRes = await getWeather(searchCity);
            const forecastRes = await getForecast(searchCity);


            setWeather(weatherRes.data);
            setForecast(forecastRes.data.list);
            setCity(searchCity);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchWeather();
    }, []);
    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex flex-col gap-6">
                <Header fetchWeather={fetchWeather} />
                <CurrentWeather data={weather} />
                <Highlights data={weather} />
                <Forecast data={forecast} />
            </div>
        </div>
    );
}

