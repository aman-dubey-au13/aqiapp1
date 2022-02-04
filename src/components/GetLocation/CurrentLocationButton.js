import React from "react";
// import { Link } from 'react-router-dom'
import { useState } from "react";

const CurrentLocationButton = (props) => {
  const [isError, SetError] = useState(false);

  const finaldata = (data) => {
    props.statsHandler(data);
    // props.modalSet(true);
  }

  const getPosition = function () {
    return new Promise(function (resolve, reject) {
      // navigator.geolocation.getCurrentPosition(
      //   position => resolve(position),
      //   err => reject(err)
      // );
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  // getPosition().then(pos => console.log(pos));
  const whereAmI = function () {
    getPosition()
      .then((pos) => {
        const { latitude: lat, longitude: lng } = pos.coords;
        // return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

        return fetch(
          `https://api.ambeedata.com/latest/by-lat-lng?lat=${lat}&lng=${lng}`,
          {
            method: "GET",
            headers: {
              "x-api-key":
                "c6e328fbafdd155abc01c43674f091c2861c1620f457ad58872661265ebbbea2",
              "Content-type": "application/json",
            },
          }
        );
      })
      .then((res) => {
        if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
        console.log(res, "jshbdvjsbhdjbsdvjbhs final");
        return res.json();
      })
      .then((data) => {
        // dataStatsHandler(data.stations);
        finaldata(data);
        // props.statsHandler(data);
        console.log(data.stations, "final data by ambee");
      })
      .catch((err) => {
        SetError(true)
        console.error(`${err.message} 💥`)
      });
  };

  return (
    <>
      <button
        onClick={whereAmI}
        className="xsm:text-base text-white bg-green-700 xsm:mt-8 pt-2 pb-2 pl-4 pr-4 rounded-full md:text-2xl fas"
      >
        &#xf05b; 
        {/* <Link to="/output"> */}
          Get Current Location AQI
          {/* </Link> */}
      </button>
      {isError && (
        <div className="text-red-500">There is a problem in fetching your location.Please refresh the page and Try Again</div>
      )}
    </>
  );
};

export default CurrentLocationButton;
