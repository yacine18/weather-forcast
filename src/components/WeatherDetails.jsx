import React from "react";
// import { Link } from "react-router-dom";

const WeatherDetails = ({ data }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        className="card"
        style={{
          width: "35%",
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "2%",
        }}
      >
        <div className="card-body">
          <div style={{ marginTop: "10%", margin: "auto", marginBottom: "8%" }}>
            <img
              src={
                data?.weather[0]?.description === "clear sky"
                  ? "/images/sun.png"
                  : "/images/clouds.png"
              }
              width="30%"
              height="30%"
              alt="clouds"
            />
            <h5 className="card-title" style={{ fontSize: "2.5rem" }}>
              {data?.main?.temp.toFixed(0)}°
            </h5>
            <h6
              className="card-subtitle mb-2 text-muted"
              style={{ fontSize: "1.2rem" }}
            >
              {data?.weather[0]?.description}
            </h6>
          </div>
        </div>
        <div className="row">
          <p className="col-md-6 p-3">Wind Speed: {data?.wind?.speed}mph</p>
          <p className="col-md-6 p-3">Humidity: {data?.main?.humidity}%</p>
        </div>
      </div>
      <h6 className="mt-3">Location | {data?.name}</h6>
    </div>
  );
};

export default WeatherDetails;
