import React, { Component } from "react";
import "./App.css";
import "./css/home.css";
import { Router } from "@reach/router";
import Nav from "./Components/Nav";
import Axios from "axios";
import Gardener from "./Components/Gardener";
import Cleaner from "./Components/Cleaner";
import Chef from "./Components/Chef";
import Home from "./Components/Home";
import AddGardener from "./Components/AddGardener";

export default class App extends Component {
  componentDidMount() {
    Axios.get("http://localhost:4003/api/gardener").then(res => {
      console.log(res.data);
    });
  }
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Router>
          <Home path="/" />
          <Gardener path="gardener" />
          <Cleaner path="cleaner" />
          <Chef path="watchman" />
          <AddGardener path="addgardener" />
        </Router>
      </React.Fragment>
    );
  }
}

/* <Link className="my-links" to="/gardner">
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
            </Link> */
