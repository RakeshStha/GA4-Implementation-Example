import React, { useState } from "react";
import ga4Config from "../shared/ga4Config";

export const Home = () => {
  const [Hide, setHide] = useState(true)
  const Clicked = () => {
    setHide(!Hide)
    ga4Config("home-button", "home-category", "home-label", 'xxxxx')
  };
  return (
    <div>
    <div className="container-fluid m-0 p-0 home-background"> </div>
        <div className="bg-text">
          <h1>Welcome to Home Page</h1>
          <button className="btn btn-primary mt-3" onClick={() => Clicked()}>
            Click...
          </button>
          <div className={`border border-1 mt-4 p-3 ${Hide ? "hide" : "show"}`}>
            Congratulation button clicked !
          </div>
        </div>
    </div>
  );
};
