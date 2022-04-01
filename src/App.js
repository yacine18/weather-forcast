import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchBox from "./components/SearchBox";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<SearchBox />} />
          <Route path="/details" element={<WeatherDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
