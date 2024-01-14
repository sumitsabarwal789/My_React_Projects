import Card from "./components/Card";
import Navbar from "./components/Navbar";
import InsideCards from "./components/InsideCards";
import Forcast from "./components/Forcast";
import ForecastWeek from "./components/ForecastWeek";
import { useContext } from "react";
import UserContext from "./context/UserContext";
import Errorr from "./components/Errorr";

export default function App() {
  const { LocationContent, CurrentContent } = useContext(UserContext);
  if (!LocationContent || !CurrentContent) {
    return (
      <div>
        <Errorr />
      </div>
    );
  }
  return (
    <div className="w-full h-full bg-[#1F2041] text-center text-white mt-12">
      <Navbar />
      <Card />
      <Forcast />
      <ForecastWeek />
      <InsideCards />
    </div>
  );
}
