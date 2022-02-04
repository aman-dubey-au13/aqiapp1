import React from "react";
import { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { useEffect } from "react/cjs/react.development";
// import styles from './Search.module.css';
import "./../../style/main.css";

const Search = (props) => {
  const inputHandler = useRef("");
  const [isError, SetError] = useState(false);

  const finaldata = (data) => {
    console.log('final data in Search', data);
    props.statsSearchHandle(data);
    props.modalSearchHandle();
    // props.modalSet(true);
  };

  // useEffect(() => {

  //   let city = inputHandler.current.value;
  //   let beyondFirstChar = city.slice(1).toLowerCase();
  //   city = city.charAt(0).toUpperCase() + beyondFirstChar;

  //   fetch(`https://api.ambeedata.com/latest/by-city?city=${city}`, {
  //     method: "GET",
  //     headers: {
  //       "x-api-key": "c6e328fbafdd155abc01c43674f091c2861c1620f457ad58872661265ebbbea2",
  //       "Content-type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       console.log(response, 'resss');
  //       finaldata(response);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  const searchHandler = async (e) => {
    e.preventDefault();
    try{
    let city = inputHandler.current.value;
    let beyondFirstChar = city.slice(1).toLowerCase();
    city = city.charAt(0).toUpperCase() + beyondFirstChar;
    console.log('cityyy', city)
    const response = await fetch(
      // `https://maps.googleapis.com/maps/api/js?key=AIzaSyBBFMdfAQtiDhIMJytUZhUwMEnrT8uVvB8&libraries=places&callback=initMap`,
      `https://api.ambeedata.com/latest/by-city?city=${city}`,
      {
        method: "GET",
        headers: {
          "x-api-key":
            "c6e328fbafdd155abc01c43674f091c2861c1620f457ad58872661265ebbbea2",
          "Content-type": "application/json",
        },
      }
    );
    console.log(response, 'response');
    if(!response.ok) throw new Error(`Error With Client Api`);
    console.log('wil i runnnn');

    const data = await response.json();

    finaldata(data);

    // console.log(data);
    } catch(err) {
      SetError(true);
      console.error(`${err} faalling into error`);
    }
  };

  // const formSubmitHandler = (e) => {
  //   e.preventDefault();
  //   let city = inputHandler.current.value;
  //   let beyondFirstChar = city.slice(1).toLowerCase();
  //   city = city.charAt(0).toUpperCase() + beyondFirstChar;
  //   console.log("cityyy in search", city);
  //   props.citySet(city);
  // };

  return (
    <form
      onSubmit={searchHandler}
      className="border-2 border-r-4 rounded-full xsm:flex xsm:flex-row xsm:w-[95%] xsm:mt-8 sm:flex sm:flex-row sm:items-center sm:mt-6 border-green-600 md:w-[120%]"
    >
      <input
        type="text"
        placeholder="Please enter the city here.."
        name="search"
        ref={inputHandler}
        className="w-full border-none m-4 focus:outline-none bg-transparent"
      />
      
      <button
        type="submit"
        className="xsm:pt-0 xsm:pb-0 xsm:pl-3 xsm:pr-3 xsm:mb-2 xsm:mt-2 xsm:mr-2 xsm:text-sm sm:pl-7 sm:pr-7 text-white bg-green-700 sm:pt-2 sm:pb-2 mr-4 rounded-full sm:text-lg"
      >
        {/* <i class="fa fa-search"></i> */}
        Search
        {/* </Link> */}
        {/* <span className="sm:mt-3 sm:pl-5 sm:pr-5 text-white bg-green-500 pt-2 pb-2 pl-4 pr-4 rounded-full text-lg">Search</span> */}
      </button>
      {isError && (
        <div className="text-red-500 font-semibold">
          Please Provide a valid City
        </div>
      )}
    </form>
  );
};

export default Search;
