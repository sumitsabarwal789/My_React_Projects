import Card from "./components/Card";
import Navbar from "./components/Navbar";
import InsideCards from "./components/InsideCards";
import Forcast from "./components/Forcast";
import ForecastWeek from "./components/ForecastWeek";
import { useContext, useState, useEffect } from "react";
import UserContext from "./context/UserContext";
import Errorr from "./components/Errorr";

export default function App() {
  const { LocationContent, CurrentContent } = useContext(UserContext);
  const [background, setBackground] = useState("#1F2041");

  useEffect(() => {
    let a =
      CurrentContent &&
      CurrentContent.condition &&
      CurrentContent.condition.text;

    if (a === "Clear") {
      setBackground("#254269");
    } else if (a === "Light snow") {
      setBackground("#5176aa");
    } else if (a === "Moderate snow") {
      setBackground("#5176aa");
    } else if (a === "Light rain") {
      setBackground("#a3b5c3");
    } else if (a === "Partly cloudy") {
      setBackground("#39465f");
    } else if (a === "Mist") {
      setBackground("#101e26");
    } else if (a === "Sunny") {
      setBackground("#6a8aa0");
    } else if (a === "Fog") {
      setBackground("#46535b");
    } else if (a === "Overcast") {
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
    </div>
  );
}
