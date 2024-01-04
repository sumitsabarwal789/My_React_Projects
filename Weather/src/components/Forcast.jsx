import React, { useContext } from "react";
import { FaRegClock } from "react-icons/fa";
import UserContext from "../context/UserContext";

export default function Forcast() {
  const { forecast } = useContext(UserContext);

  return (
    <>
      <section className="hourlyForecast mx-5 mt-8">
        <div className="uv  w-full h-40 rounded-5 shadow-md backdrop-blur-14 bg-white bg-opacity-5 p-3  rounded-xl text-left flex flex-col space-y-3 ">
          <div className="flex space-x-2 text-gray-400">
            <FaRegClock className="text-gray-400 mt-1 " />{" "}
            <span>HOURLY FORECAST</span>
          </div>

          <section className="time">
            <div>
              <p className="text-lg">egg</p>
              <p className="text-lg">Low</p>
              <p className="text-lg"></p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
