import React from "react";
import CurrentLocationButton from "../GetLocation/CurrentLocationButton";
import Search from "../SearchBar/Search";

const Content = (props) => {

    return(
        <div className="xsm:h-[90%] xsm:mt-20 flex flex-col items-center md:h-max md:mt-0 md:mr-7">
            <div className="font-bold text-5xl text-[#65b58d] leading-3">Know Your</div><br/>
            <div className="xsm:text-7xl xsm:text-center text-green-700 md:text-8xl md:font-extrabold">Air Quality</div>
            <Search modalSearchHandle={props.modalAppHandle} statsSearchHandle={props.statsAppHandle} />
            <CurrentLocationButton modalSet={props.modalSet} statsHandler={props.statsHandler}/>
        </div>
    );

}

export default Content;