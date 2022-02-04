// import './App.css';
import React from "react";
import Content from "./components/HomeContent/Content";
import earthImage from "./assets/earth2.png";
import ModalShown from "./components/Modal/ModalShown";
import { useState } from "react";
// import Output from "./components/Output/Output";
// import { Switch, Route } from "react-router-dom";

function App() {
  // const [city, setCity] = useState('');
  const [modal,setModal] = useState(false);
  const [stats, setStats] = useState([]);

  const modalSetHandler = () => {
    // console.log(city,'cityyyy in app');
    setModal(prevState => !prevState);
    // modalHandler(city);
  };

  const statsHandling = (data) => {
    console.log(data, "data in parent container");
    setStats(data);
  };

  return (
    <>
      <div className="xsm:flex-col flex md:flex-row items-center">
        {/* {modal && <ModalShown statsShown={stats} modalSet={modalSetHandler}/>} */}
        {modal && <ModalShown statsShown={stats} modalSetApp={modalSetHandler} />}
        {/* <Content modalSet={modalSetHandler} statsHandler={statsHandling} />  w-[57vw] mr-[13rem]*/}
        <div className="xsm:absolute xsm:-bottom-[18vh] xsm:h-[45%] xsm:w-[125vw] overflow-y-hidden overflow-x-hidden md:h-screen md:w-[53%] md:items-center md:relative md:flex md:bottom-0">
          <img
            className="xsm:ml-auto xsm:mr-auto xsm:object-cover scale-150 h-[120%] img-container md:-ml-[54vh]"
            src={earthImage}
            alt="globeImage"
          />
        </div>
        <div>
        {/* <Switch> */}
          {/* <Route exact path="/"> */}
            {/* <Content cityHandler={cityHandling} /> */}
          <Content statsAppHandle={statsHandling} modalAppHandle={modalSetHandler}/>
          {/* </Route> */}
          {/* <Route exact path="/output"> */}
            {/* <Output statsShown={city} /> */}
          {/* </Route> */}
        {/* </Switch> */}
        </div>
      </div>
    </>
  );
}

export default App;
