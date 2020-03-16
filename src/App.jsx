import React from "react";
import "./App.css";
import "./css/home.css";
import { Router } from "@reach/router";
import Nav from "./components/nav"
// import chef from "../images/chef.png";
import chef from "./images/chef.png";
import AddUser from "./adduser";
import Chef from "./components/chef"
import EditTask from "./components/edittask"
import AddTask from "./components/addtask"


export default class App extends React.Component{

  
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Router>

          <Chef
            path="/chef"/>
    <EditTask path="/edittask/:id"/>
    <AddTask path="/addtask"/>
 
        </Router>
      </React.Fragment>
    );
  }
}



