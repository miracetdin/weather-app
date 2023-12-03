import React, { Fragment, useContext } from 'react';
import CityContext from '../contexts/CityContext';
import WeatherContext from '../contexts/WeatherContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import weatherCaseFunction from '../functions/WeatherCase';

function Card({dayName, dayNo}) {
  const { selectedCity } = useContext(CityContext);
  const { weatherData } = useContext(WeatherContext);
  console.log(dayNo)
  return (
    <Fragment>
      <div className="card" style={{width: "18rem", backgroundColor: "#FAFAD2"}}>
        <div className="card-body">
          <h3 className="card-title pb-1" style={{fontSize: "18px"}}>{dayName}</h3>
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <div>
                  <p style={{fontSize: "30px", height: "25px"}}><strong>{Math.round(weatherData.list[dayNo+1].main.temp)} °C</strong></p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
              <div>
                  <img src={`https://openweathermap.org/img/wn/${weatherData.list[dayNo+1].weather[0].icon}@2x.png`} width={'30%'} alt='weather-icon' />
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </Fragment>
  )
};

export default Card;
