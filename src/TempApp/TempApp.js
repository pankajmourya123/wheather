import React, { useEffect, useState } from "react";
import "./TempApp.css";
import { ImCross } from "react-icons/im";
import { FaStreetView } from "react-icons/fa";

function TempApp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=28bb4f889fdaeb4d276872e78f6d8675`;
      const res = await fetch(url);

      const resjson = await res.json();
      // console.log(resjson)
      setCity(resjson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <div className="box">
      <div>
        <input
          type="text"
          className="input"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
       
      </div>
      { ! city  ? (
        <p> NO DATA FOUND</p>
     ) : (
        <div className="info">
          <div className="main">
            <h1>
              <FaStreetView className="fa" />
            </h1>
            <h2 className="location ml-5">{search}</h2>
          </div>
          <h1 className="temp">{city.temp} 'cel</h1>
          <h3 className="tempmin_max">
            min :{city.temp_min} 'cel | max{city.temp_max} :'cel
          </h3>
        </div>
      )}
    </div>
  );
}

export default TempApp;
