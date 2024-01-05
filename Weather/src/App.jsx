import UserContextProvider from "./context/UserContextProvider";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import InsideCards from "./components/InsideCards";
import Forcast from "./components/Forcast";

export default function App() {
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
