import React, { Fragment, useContext } from 'react';
import CityContext from '../contexts/CityContext';
import WeatherContext from '../contexts/WeatherContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import weatherCaseFunction from '../functions/WeatherCase';

function Today() {
  const { selectedCity } = useContext(CityContext);
  const { weatherData } = useContext(WeatherContext);
  const today = new Date();
  const daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
  console.log(today.getDay())

  console.log(weatherData);

  return (
    <Fragment>
        
      <div className="card" style={{width: "18rem", backgroundColor: "#FFFACD"}}>
        <div className="card-body">
          <h3 className="card-title pb-1" style={{fontSize: "36px"}}>{selectedCity}</h3>
          <h5 className="pb-2 pt-4">{daysOfWeek[today.getDay()]}</h5>
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <p className="pt-3" style={{fontSize: "40px", height: "100px"}}><strong>{Math.round(weatherData.list[0].main.temp)} °C</strong></p>
                </div>
                <div>
                  <p style={{fontSize: "12px"}}>{weatherCaseFunction(weatherData.list[0].weather[0].main)}</p>
                  <p style={{fontSize: "12px"}}>Hissedilen: {Math.round(weatherData.list[0].main.feels_like)} °C</p>
                  <p style={{fontSize: "12px"}}>Nem: %{Math.round(weatherData.list[0].main.humidity)}</p>
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <img src={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`} alt='weather-icon' />
                </div>
                <div>                  
                  <p style={{fontSize: "12px"}}>En Düşük: {Math.round(weatherData.list[0].main.temp_min)} °C</p>
                  <p style={{fontSize: "12px"}}>En Yüksek: {Math.round(weatherData.list[0].main.temp_max)} °C</p>
                  <p style={{fontSize: "12px"}}>Rüzgar: {Math.round(weatherData.list[0].wind.speed)} km/sa</p>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
       
    </Fragment>
  )
};

export default Today;
