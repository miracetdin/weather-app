import React, { Fragment, useContext, useEffect } from 'react';
import CityContext from '../contexts/CityContext';

function CityList() {
  const { cityList, setSelectedCity } = useContext(CityContext);

  console.log(CityList)

  useEffect(() => {
    createList();
  }, []);

  function createList() {
    const options = cityList.map(city => (
      <option key={city.id} value={city.name}>
        {city.name}
      </option>
    ));

    const selectElement = (
      <select id="selectCity" name="selectCity" style={{borderRadius: "10px", backgroundColor: "#FFFFE0", borderWidth: "1px"}} onChange={e => setSelectedCity(e.target.value)}>
        {options}
      </select>
    )

    return selectElement;
  }

  return (
    <Fragment>
      <label htmlFor="selectCity" style={{paddingRight: "1rem"}}>Şehir:</label>
      { createList() }
    </Fragment>
  )
}

export default CityList
