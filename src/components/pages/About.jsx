import React from "react";
import ga4Config from "../shared/ga4Config";

export const About = () => {
  const Clicked = () => {
    alert("You clicked");
    ga4Config("about-action", "about-category", "about-label", "xxxx")
  };
  return (
    <>
      <div className="container-fluid text-center">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh", width: "100%" }}
        >
          <div>
            <h1>Welcome to About Page</h1>
            <button className="btn btn-primary mt-3" onClick={() => Clicked()}>
              Read More...
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
