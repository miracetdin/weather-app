import { useState, createContext, useContext, useEffect } from "react";
import axios from 'axios';

const CityContext = createContext();

export const CityProvider = ({children}) => {
  const [selectedCity, setSelectedCity] = useState("Adana");
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    const city_url = "https://turkiyeapi.cyclic.app/api/v1/provinces";
    axios.get(city_url)
      .then(response => {
          setCityList(response.data.data)})
      .catch(error => {
          console.error("Error: ", error);
      });
  }, []);

  console.log(cityList)

  const values = {
    cityList,
    setCityList,
    selectedCity,
    setSelectedCity
  };

  return <CityContext.Provider value={values}>{children}</CityContext.Provider>
};

export default CityContext;

export const useCityContext = () => {
    return useContext(CityContext);
};
