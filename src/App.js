import "./App.css";
import React, { useState, useEffect, createContext } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import SideBar from "./components/sideBar";

export const CardContext = createContext();

function App() {
  const [arr, setArr] = useState(JSON.parse(localStorage.getItem("LocalData")) || []);

  useEffect(() => {
    localStorage.setItem("LocalData", JSON.stringify(arr));
  }, [arr]); 

  return (
    <div className="App">
      <div className="left-Part">
        <CardContext.Provider value={{ arr, setArr }}>
          <Header />
          <Main />
        </CardContext.Provider>
        <Footer />
      </div>
      <div className="Right-Part">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
