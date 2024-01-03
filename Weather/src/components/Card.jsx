import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import InsideCards from "./InsideCards";

export default function Card() {
  const { LocationContent, CurrentContent } = useContext(UserContext);
  const [infoUpdated, setInfoUpdated] = useState(new Date());

  if (!LocationContent || !CurrentContent) {
    return <div>Loading...</div>; // or handle the loading state
  }

  // Check if the required properties exist before rendering
  const { name: locationName = "" } = LocationContent;

  const {
    temp_c: temperature = "",
    condition: { text: conditionText = "" } = {},
    last_updated: lastUpdated = "",
  } = CurrentContent;

  console.log(infoUpdated);
  return (
    <>
      <section className="w-full h-full bg-[#1F2041] text-center text-white">
        <div className="pt-10 flex flex-col justify-center space-y-2 ">
          <h3 className="text-3xl">{locationName}</h3>
          <h3 className="text-6xl">{temperature}&deg;</h3>
          <h3 className="text-2xl">{conditionText}</h3>
        </div>
        <div className="">
          <InsideCards />
        </div>
      </section>
    </>
  );
}
