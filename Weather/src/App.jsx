// App.js
import React, { useContext } from "react";
import UserContextProvider from "./context/UserContextProvider";
import Card from "./components/Card";

export default function App() {
  return (
    <UserContextProvider>
      <Card />
    </UserContextProvider>
  );
}
