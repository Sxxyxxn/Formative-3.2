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
          {/* <Home
            path="/"
            appstate={this.state.characters}
            removePerson={this.removePerson}
          /> */}
          <Chef
            path="/chef"
            // allemployees={this.state.characters}
            // removePerson={this.removePerson}
            // employeeListPopulated={this.state.employeeListPopulated}
          />
                    {/* <Gardner
            path="/gardner"
            // allemployees={this.state.characters}
            // removePerson={this.removePerson}
            // employeeListPopulated={this.state.employeeListPopulated}
          /> */}
                    {/* <Watchman
            path="/watchman"
            // allemployees={this.state.characters}
            // removePerson={this.removePerson}
            // employeeListPopulated={this.state.employeeListPopulated}
          /> */}
                    {/* <Cleaner
            path="/cleaner"
            // allemployees={this.state.characters}
            // removePerson={this.removePerson}
            // employeeListPopulated={this.state.employeeListPopulated}
          /> */}
          {/* <AddEmployee path="/addemployee" addPerson={this.addPerson} /> */}
          {/* <EditEmployee
            path="/edit/:uuid"
            editPerson={this.editPerson}
            getSinglePerson={this.getSinglePerson}
          /> */}
    <EditTask path="/edittask"/>
    <AddTask path="/addtask"/>
 
        </Router>
      </React.Fragment>
    );
  }
}



