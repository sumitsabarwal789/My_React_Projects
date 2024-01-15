import Card from "./components/Card";
import Navbar from "./components/Navbar";
import InsideCards from "./components/InsideCards";
import Forcast from "./components/Forcast";
import ForecastWeek from "./components/ForecastWeek";
import { useContext, useState, useEffect } from "react";
import UserContext from "./context/UserContext";
import Errorr from "./components/Errorr";
import Footer from "./components/Footer";

export default function App() {
  const { LocationContent, CurrentContent } = useContext(UserContext);
  const [background, setBackground] = useState("#1F2041");

  useEffect(() => {
    let weatherCondition =
      CurrentContent &&
      CurrentContent.condition &&
      CurrentContent.condition.text;

    if (weatherCondition === "Clear") {
      setBackground("#254269");
    } else if (weatherCondition === "Light snow") {
      setBackground("#5176aa");
    } else if (weatherCondition === "Moderate snow") {
      setBackground("#5176aa");
    } else if (weatherCondition === "Light rain") {
      setBackground("#a3b5c3");
    } else if (weatherCondition === "Partly cloudy") {
      setBackground("#39465f");
    } else if (weatherCondition === "Mist") {
      setBackground("#101e26");
    } else if (weatherCondition === "Sunny") {
      setBackground("#6a8aa0");
    } else if (weatherCondition === "Fog") {
      setBackground("#46535b");
    } else if (weatherCondition === "Overcast") {
      setBackground("#46535b");
    } else {
      setBackground("#1F2041");
    }
  }, [CurrentContent]);

  if (!LocationContent || !CurrentContent) {
    return (
      <div>
        <Errorr />
      </div>
    );
  }
  return (
    <div
      className="w-full h-full  text-center text-white mt-12"
      style={{ backgroundColor: background }}
    >
      <Navbar background={background} />
      <Card />
      <Forcast />
      <ForecastWeek />
      <InsideCards />
      <Footer background={background} />
    </div>
  );
}
