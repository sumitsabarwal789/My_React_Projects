import React, { useContext } from "react";
import { BsCalendar3 } from "react-icons/bs";
import UserContext from "../context/UserContext";
import { IoSunny } from "react-icons/io5";

export default function ForecastWeek() {
  const { forecast } = useContext(UserContext);
  let todayMIN;
  let todayMAX;
  let tomorrowMIN;
  let tomorrowMAX;
  let overmorrowMIN;
  let overmorrowMAX;

  if (
    forecast &&
    forecast.forecastday &&
    forecast.forecastday.length > 0 &&
    forecast.forecastday[0].day &&
    forecast.forecastday[0].day.condition
  ) {
    todayMIN = parseInt(forecast.forecastday[0].day.mintemp_c);
    todayMAX = parseInt(forecast.forecastday[0].day.maxtemp_c);
    tomorrowMIN = parseInt(forecast.forecastday[1].day.mintemp_c);
    tomorrowMAX = parseInt(forecast.forecastday[1].day.maxtemp_c);
    overmorrowMIN = parseInt(forecast.forecastday[2].day.mintemp_c);
    overmorrowMAX = parseInt(forecast.forecastday[2].day.maxtemp_c);
  }
  return (
    <>
      <section className="mt-10 mx-5">
        <section className="w-full h-full rounded-5 shadow-md backdrop-blur-14 bg-white bg-opacity-5 p-3  rounded-2xl flex flex-col ">
          <div className="flex space-x-2 text-gray-400">
            <BsCalendar3 className="mt-1" /> <span>3-DAY FORECAST</span>
          </div>

          <section className="mt-5 flex flex-col space-y-4">
            <section className="today flex justify-between">
              <div className="w-[30%] text-start">Today</div>
              <div className="w-[20%]">
                <IoSunny className="text-yellow-600" />
              </div>
              <div className="flex space-x-6 w-[50%] text-right justify-end">
                <p className="min text-gray-400">{todayMIN}&deg;</p>
                <p className="mt-3 h-1 w-96 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 rounded-lg"></p>
                <p className="max">{todayMAX}&deg;</p>
              </div>
            </section>

            <section className="tomorrow  flex justify-between">
              <div className="w-[30%] text-start">Tomorrow</div>
              <div className="w-[20%]">
                <IoSunny className="text-yellow-600" />
              </div>
              <div className="flex space-x-6 w-[50%] text-right justify-end">
                <p className="min text-gray-400">{tomorrowMIN}&deg;</p>
                <p className="mt-3 h-1 w-96 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 rounded-lg"></p>
                <p className="max">{tomorrowMAX}&deg;</p>
              </div>
            </section>

            <section className="overmorrow  flex justify-between pb-2">
              <div className="w-[30%] text-start">Overmorrow</div>
              <div className="w-[20%]">
                <IoSunny className="text-yellow-600" />
              </div>
              <div className="flex space-x-6 w-[50%] text-right justify-end">
                <p className="min text-gray-400">{overmorrowMIN}&deg;</p>
                <p className="mt-3 h-1 w-96 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 rounded-lg"></p>
                <p className="max">{overmorrowMAX}&deg;</p>
              </div>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
