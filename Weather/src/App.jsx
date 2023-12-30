import React, { useEffect, useState } from "react";
// import ContextProvider from "./context/ContextProvider";
// import Login from "./components/Login";
// import Profile from "./components/Profile";
import Card from "./components/Card";

export default function App() {
  const [weatherArticles, setWeatherArticles] = useState([]);

  async function fetchAPI() {
    const url =
      "https://weatherapi-com.p.rapidapi.com/current.json?q=25.5788%2C91.8933";

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5450c171efmsha75af24c612a3ccp1ffb6cjsnccb3e3875fe9",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setWeatherArticles([result]);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <div className="mt-10 ml-10 ">
        <h1 className="mb-10">Login Form</h1>
        {/* <ContextProvider>
          <Login />
          <Profile />
        </ContextProvider> */}
      </div>
      {weatherArticles.map((article, index) => (
        <Card
          key={index}
          name={article.location.name}
          condition={article.current.condition.icon}
        />
      ))}
    </>
  );
}
