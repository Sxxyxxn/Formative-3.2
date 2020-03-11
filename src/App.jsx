import React from "react";
import "./App.css";
import "./css/home.css";
import { Link } from "@reach/router";
import Nav from "./Components/nav";
// import chef from "../images/chef.png";
import chef from "./images/chef.png";

function App() {
  return (
    <div className="App">
      <div className="home_screen">
        <Nav />

        <div className="categories-main">
          <Link className="my-links" to="/gardner">
            <div className="section-1"> </div>
          </Link>

          <Link className="my-links" to="/cleaner">
            <div className="section-2"></div>
          </Link>

          <Link className="my-links" to="/chef">
            <div className="section-3"></div>
          </Link>

          <Link className="my-links" to="/watchman">
            <div className="section-4"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
