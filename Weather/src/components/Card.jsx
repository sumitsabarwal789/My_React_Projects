import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
export default function Card() {
  let todayMIN;
  let todayMAX;
  const { LocationContent, CurrentContent, forecast } = useContext(UserContext);

  const { name: locationName = "" } = LocationContent;

  const {
    temp_c: temperature = "",
    condition: { text: conditionText = "" } = {},
    last_updated: lastUpdated = "",
  } = CurrentContent;

  if (
    forecast &&
    forecast.forecastday &&
    forecast.forecastday.length > 0 &&
    forecast.forecastday[0].day &&
    forecast.forecastday[0].day.condition
  ) {
    todayMIN = parseInt(forecast.forecastday[0].day.mintemp_c);
    todayMAX = parseInt(forecast.forecastday[0].day.maxtemp_c);
  }
  console.log(todayMAX);
  return (
    <>
      <section className="w-full h-full bg-[#1F2041] text-center text-white mt-12">
        {conditionText === "Sunny" && (
          <div
            className="pt-10 flex flex-col justify-center space-y-2 bg-cover bg-no-repeat bg-center h-96"
            style={{ backgroundImage: "url('/sunny.avif')" }}
          >
            <h3 className="text-3xl">{locationName}</h3>
            <h3 className="text-6xl">{temperature}&deg;</h3>
            <h3 className="text-2xl ">{conditionText}</h3>
            <div className="flex">
              <p>{todayMIN}&deg;</p>
              <p>{todayMAX}&deg;</p>
            </div>
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
            <div className="flex justify-center text-2xl space-x-3">
              <p>{todayMIN}&deg;</p>
              <p>{todayMAX}&deg;</p>
            </div>
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
            <div className="flex justify-center text-2xl space-x-3">
              <p>{todayMIN}&deg;</p>
              <p>{todayMAX}&deg;</p>
            </div>
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
            <div className="flex justify-center text-2xl space-x-3">
              <p>{todayMIN}&deg;</p>
              <p>{todayMAX}&deg;</p>
            </div>
          </div>
        )}

        {conditionText === "Partly cloudy" && (
          <div
            className="pt-10 flex flex-col justify-center space-y-2 bg-cover bg-no-repeat bg-center h-96"
            style={{
              backgroundImage: "url('/PartlyCloudy.jpg')",
            }}
          >
            <h3 className="text-3xl">{locationName}</h3>
            <h3 className="text-6xl">{temperature}&deg;</h3>
            <h3 className="text-2xl">{conditionText}</h3>
            <div className="flex justify-center text-2xl space-x-3">
              <p>{todayMIN}&deg;</p>
              <p>{todayMAX}&deg;</p>
            </div>
          </div>
        )}

        {conditionText === "Overcast" && (
          <div
            className="pt-10 flex flex-col justify-center space-y-2 bg-cover bg-no-repeat bg-center h-96"
            style={{
              backgroundImage: "url('/overcast.avif')",
            }}
          >
            <h3 className="text-3xl">{locationName}</h3>
            <h3 className="text-6xl">{temperature}&deg;</h3>
            <h3 className="text-2xl">{conditionText}</h3>
            <div className="flex justify-center text-2xl space-x-3">
              <p>{todayMIN}&deg;</p>
              <p>{todayMAX}&deg;</p>
            </div>
          </div>
        )}

        {conditionText === "Light snow" && (
          <div
            className="pt-10 flex flex-col justify-center space-y-2 bg-cover bg-no-repeat bg-center h-96"
            style={{
              backgroundImage: "url('/lightSnow.png')",
            }}
          >
            <h3 className="text-3xl">{locationName}</h3>
            <h3 className="text-6xl">{temperature}&deg;</h3>
            <h3 className="text-2xl">{conditionText}</h3>
            <div className="flex justify-center text-2xl space-x-3">
              <p>{todayMIN}&deg;</p>
              <p>{todayMAX}&deg;</p>
            </div>
          </div>
        )}

        {conditionText === "Moderate snow" && (
          <div
            className="pt-10 flex flex-col justify-center space-y-2 bg-cover bg-no-repeat bg-center h-96"
            style={{
              backgroundImage: "url('/lightSnow.png')",
            }}
          >
            <h3 className="text-3xl">{locationName}</h3>
            <h3 className="text-6xl">{temperature}&deg;</h3>
            <h3 className="text-2xl">{conditionText}</h3>
            <div className="flex justify-center text-2xl space-x-3">
              <p>{todayMIN}&deg;</p>
              <p>{todayMAX}&deg;</p>
            </div>
          </div>
        )}

        {conditionText === "Light rain" && (
          <div
            className="pt-10 flex flex-col justify-center space-y-2 bg-cover bg-no-repeat bg-center h-96"
            style={{
              backgroundImage: "url('/lightRain.jpg')",
            }}
          >
            <h3 className="text-3xl text-gray-400">{locationName}</h3>
            <h3 className="text-6xl text-gray-400">{temperature}&deg;</h3>
            <h3 className="text-2xl text-gray-400">{conditionText}</h3>
            <div className="flex justify-center text-2xl space-x-3">
              <p>{todayMIN}&deg;</p>
              <p>{todayMAX}&deg;</p>
            </div>
          </div>
        )}

        {conditionText === "Fog" && (
          <div
            className="pt-10 flex flex-col justify-center space-y-2 bg-cover bg-no-repeat bg-center h-96"
            style={{
              backgroundImage: "url('/Fog.jpg')",
            }}
          >
            <h3 className="text-3xl ">{locationName}</h3>
            <h3 className="text-6xl ">{temperature}&deg;</h3>
            <h3 className="text-2xl ">{conditionText}</h3>
            <div className="flex justify-center text-2xl space-x-3">
              <p>{todayMIN}&deg;</p>
              <p>{todayMAX}&deg;</p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
