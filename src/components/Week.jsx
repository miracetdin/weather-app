import React, { Fragment } from 'react';
import Card from './Card';

function Week() {
  const today = new Date();
  const daysOfWeek = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
  const dayList = [today];

  for (let i=1; i<6; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);
    dayList.push(nextDay);
  }

  return (
    <Fragment>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
          {/* {
            [...Array(6)].map((_, index) => (
              <div className="col-lg-4 col-md-4 mb-4" style={{width: "33%"}} key={index}>
                <Card />
              </div>
            ))
          } */}
          {
            dayList.map((day, index) => (
              <div className="col-lg-4 col-md-4 mb-2 mt-2" style={{width: "33%"}} key={index}>
                <Card dayName={daysOfWeek[day.getDay()]} dayNo={index} />
              </div>
            ))
          }
        </div>
      </div>
    </Fragment>
  )
};

export default Week;
