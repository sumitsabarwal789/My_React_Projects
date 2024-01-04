import UserContextProvider from "./context/UserContextProvider";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
// import Errorr from "./components/Errorr";
import InsideCards from "./components/InsideCards";
import Forcast from "./components/Forcast";
// import { useContext } from "react";
// import UserContext from "./context/UserContext";

export default function App() {
  // const { errorr } = useContext(UserContext);
  // const { LocationContent } = useContext(UserContext);

  return (
    <UserContextProvider>
      <div className="w-full h-full bg-[#1F2041] text-center text-white mt-12">
        <Navbar />
        <Card />
        <Forcast />
        <InsideCards />
        {/* <Errorr /> */}
      </div>
    </UserContextProvider>
  );
}
