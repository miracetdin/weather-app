import React, { Fragment } from 'react';
import Today from './Today';
import Week from './Week';
import CityList from './CityList';
import 'bootstrap/dist/css/bootstrap.min.css';

function Body() {
  return (
    <Fragment>
      <div className="continer">
        <div className="row d-flex flex-wrap justify-content-center pt-4">
          <div className="col-lg-3 col-md-3 mt-4 d-flex flex-wrap justify-content-center">
            <CityList />
          </div>
        </div>
        <div className="row d-flex flex-wrap justify-content-center pt-5">
          <div className="col-lg-3 col-md-3 d-flex flex-wrap justify-content-center">
            <Today />
          </div>
          <div className="col-lg-9 col-md-9 d-flex flex-wrap justify-content-center">
            <Week />
          </div>
        </div>
      </div>
    </Fragment> 
  )
};

export default Body;
