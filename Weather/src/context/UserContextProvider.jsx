import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [LocationContent, setLocationContent] = useState([]);
  const [CurrentContent, setCurrentContent] = useState([]);

  async function setContentFromAPI() {
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
      setLocationContent(result.location);
      setCurrentContent(result.current);
      // console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setContentFromAPI();
  }, []);

  console.log(LocationContent);
  console.log(CurrentContent);

  return (
    <UserContext.Provider
      value={{
        LocationContent: LocationContent,
        CurrentContent: CurrentContent,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
