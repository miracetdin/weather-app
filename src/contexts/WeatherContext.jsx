import { useState, useEffect, createContext, useContext } from "react";
import axios from 'axios';
import CityContext from "./CityContext";

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
  const { selectedCity } = useContext(CityContext);
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    const api_key = "77edbb30e959810d603c8b5289390528";
    const api_url = `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&cnt=7&appid=${api_key}&units=metric`;
    // https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${api_key}&units=metric

    axios.get(api_url)
      .then(response => {
        setWeatherData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.log("Error: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedCity]);

  const values = {
    weatherData,
    setWeatherData,
    loading,
    setLoading
  };

  return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
};

export default WeatherContext;

export const useWeatherContext = () => {
    return useContext(WeatherContext);
};