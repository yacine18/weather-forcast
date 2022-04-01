import axios from "axios";
import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import WeatherDetails from "./WeatherDetails";

const SearchBox = () => {
  const [zipcode, setZipcode] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `http://localhost:5000/api/weather/${zipcode}`
    );
    setData(response.data);

    if (response.data.message) {
      setError(response.data.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "4%" }}>
      <h2>Weather Forcast</h2>
      <p style={{ marginTop: "3%" }}>
        Enter a zipcode below to get the <br />
        current weather conditions for that area
      </p>
      <div
        className="input-group mb-3"
        style={{
          width: "35%",
          maxWidth: "100%",
          marginTop: "2%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Enter zipcode..."
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
        <button
          className="btn"
          onClick={handleSubmit}
          style={{
            backgroundColor: "#F17C01",
            marginLeft: "1%",
            borderRadius: "5%",
            color: "white",
          }}
        >
          Get Weather
        </button>
      </div>
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : data && data.length === 0 ? (
        <></>
      ) : (
        <WeatherDetails data={data} />
      )}
    </div>
  );
};

export default SearchBox;
