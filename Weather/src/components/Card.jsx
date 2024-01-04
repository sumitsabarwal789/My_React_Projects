import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
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

  return (
    <>
      <section className="w-full h-full bg-[#1F2041] text-center text-white mt-12">
        {conditionText === "Sunny" && (
          <div
            className="pt-10 flex flex-col justify-center space-y-2 bg-cover bg-no-repeat bg-center h-96"
            style={{ backgroundImage: "url('/sunny.jpg')" }}
          >
            <h3 className="text-3xl">{locationName}</h3>
            <h3 className="text-6xl">{temperature}&deg;</h3>
            <h3 className="text-2xl ">{conditionText}</h3>
          </div>
        )}

        {conditionText === "Patchy rain possible" && (
          <div
            className="pt-10 flex flex-col justify-center space-y-2 bg-cover bg-no-repeat bg-center h-96"
            style={{ backgroundImage: "url('/patchyRain.jpg')" }}
          >
            <h3 className="text-3xl">{locationName}</h3>
            <h3 className="text-6xl">{temperature}&deg;</h3>
            <h3 className="text-2xl">{conditionText}</h3>
          </div>
        )}

        {conditionText === "Clear" && (
          <div
            className="pt-10 flex flex-col justify-center space-y-2 bg-cover bg-no-repeat bg-center h-96"
            style={{
              backgroundImage: "url('/clear.jpg')",
            }}
          >
            <h3 className="text-3xl">{locationName}</h3>
            <h3 className="text-6xl">{temperature}&deg;</h3>
            <h3 className="text-2xl">{conditionText}</h3>
          </div>
        )}

        {conditionText === "Mist" && (
          <div
            className="pt-10 flex flex-col justify-center space-y-2 bg-cover bg-no-repeat bg-center h-96"
            style={{
              backgroundImage: "url('/mist.jpeg')",
            }}
          >
            <h3 className="text-3xl">{locationName}</h3>
            <h3 className="text-6xl">{temperature}&deg;</h3>
            <h3 className="text-2xl">{conditionText}</h3>
          </div>
        )}

        {conditionText === "Partly cloudy" && (
          <div
            className="pt-10 flex flex-col justify-center space-y-2 bg-cover bg-no-repeat bg-center h-96"
            style={{
              backgroundImage: "url('/patchyRain.jpg')",
            }}
          >
            <h3 className="text-3xl">{locationName}</h3>
            <h3 className="text-6xl">{temperature}&deg;</h3>
            <h3 className="text-2xl">{conditionText}</h3>
          </div>
        )}
      </section>
    </>
  );
}
