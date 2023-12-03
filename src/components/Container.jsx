import React, { Fragment } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function Container() {
  return (
    <Fragment>
      <div className="container">
        <div className="pt-4">
          <Header />
        </div>
        <div className="mb-1">
          <Body />
        </div>
        <div className="d-flex flex-wrap justify-content-center" style={{paddingTop: "12vh"}}>
          <Footer />
        </div>
      </div>
    </Fragment>
  )
};

export default Container;
