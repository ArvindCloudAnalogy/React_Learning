import axios from "axios";

const API_KEY = "f7bad8cbcca4507045a8bb2cf7036bc4";


export const getWeather = (city) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
};


export const getForecast = (city) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
};