import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

const Backdrop = (props) => {
  return <div className="backing" onClick={props.onConfirm}/>;
};


const ModalOverlay = (props) => {
  // console.log(props?.statsShown, 'props in final output container');
    const finaldata = props.allStats.stations;
    console.log(finaldata, 'final data in modal in Overlayy');

    const aqi = +finaldata[0]?.AQI;

    const colorPallete = aqi < 50 ? 'green' : aqi < 100 ? 'yellow' : aqi < 150 ? 'orange' : aqi<200 ? 'red' : 'purple';

  return (
    <Card onConfirmCard={props.onConfirm}>
      {/* <div>hgvhj</div> */}
        {/* <div className="text-3xl font-bold text-center"><span className="text-amber-900 underline">{dataStats[0]["state"]}</span><br/>Air Quality Information</div>
      <div className="flex justify-around flex-wrap flex-row">
            <div className="text-white bg-green-500 pt-2 pb-2 pl-4 pr-4 rounded-full text-lg m-7"><span>AQI-Info : {dataStats[0]?.aqiInfo?.category}</span></div> <br/><br/>
            <div className="text-white bg-green-500 pt-2 pb-2 pl-4 pr-4 rounded-full text-lg m-7"><span>AQI : {dataStats[0]["AQI"]}</span></div>
            <div className="text-white bg-green-500 pt-2 pb-2 pl-4 pr-4 rounded-full text-lg m-7"><span>CO : {dataStats[0]["CO"]}</span></div>
            <div className="text-white bg-green-500 pt-2 pb-2 pl-4 pr-4 rounded-full text-lg m-7"><span>NO2 : {dataStats[0]["NO2"]}</span></div>
            <div className="text-white bg-green-500 pt-2 pb-2 pl-4 pr-4 rounded-full text-lg m-7"><span>OZONE : {dataStats[0]["OZONE"]}</span></div>
            <div className="text-white bg-green-500 pt-2 pb-2 pl-4 pr-4 rounded-full text-lg m-7"><span>PM10 : {dataStats[0]["PM10"]}</span></div>
            <div className="text-white bg-green-500 pt-2 pb-2 pl-4 pr-4 rounded-full text-lg m-7"><span>PM25 : {dataStats[0]["PM25"]}</span></div>
            <div className="text-white bg-green-500 pt-2 pb-2 pl-4 pr-4 rounded-full text-lg m-7"><span>SO2 : {dataStats[0]["S02"]}</span></div>
      </div> */}
      <div className="absolute top-8 right-64 text-4xl font-bold z-[120] bg-white p-4 rounded-full underline" style={{color:colorPallete, backgroundColor:"#F5EEDC"}}>
      {finaldata[0]?.aqiInfo.category}
      </div>
      <div className="animate-bounce floating-element">
        <h2 className="p-1">{finaldata[0]?.AQI}</h2><br />
        <h4>AQI</h4>
      </div>
      <div className="animate-bounce floating-element-2">
        <h2 className="p-1">{finaldata[0]?.PM10}</h2><br />
        <h4>PM 10</h4>
      </div>
      <div className="animate-bounce floating-element-3">
        <h2 className="p-1">{finaldata[0]?.NO2}</h2><br />
        <h4>NO2</h4>
      </div>
      <div className="animate-bounce floating-element-4">
        <h2 className="p-1">{finaldata[0]?.CO}</h2><br />
        <h4>CO</h4>
      </div>
      <div className="animate-bounce floating-element-5 colauto">
        <h2 className="p-1">{finaldata[0]?.PM25}</h2><br />
        <h4>PM 2.5</h4>
      </div>

    </Card>
  );
};

const ModalShown = (props) => {
  // const [stats, statsHandler] = useState();

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.modalSetApp}/>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.modalSetApp} allStats={props.statsShown} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ModalShown;
