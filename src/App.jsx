import React from "react";
import "./App.css";
import "./css/home.css";
import { Router } from "@reach/router";
<<<<<<< HEAD
import Nav from "./Components/nav";
=======
import Nav from "./components/nav"
// import chef from "../images/chef.png";
>>>>>>> 3eadd78b1ea915f9bd8809f133d114afd745d30c
import chef from "./images/chef.png";
import AddUser from "./adduser";
import Chef from "./Components/chef";
import EditTask from "./Components/edittask";
import AddTask from "./Components/addtask";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Router>

          <Chef
<<<<<<< HEAD
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
          <EditTask path="/edittask" />
          <AddTask path="/addtask" />
=======
            path="/chef"/>
    <EditTask path="/edittask/:id"/>
    <AddTask path="/addtask"/>
 
>>>>>>> 3eadd78b1ea915f9bd8809f133d114afd745d30c
        </Router>
      </React.Fragment>
    );
  }
}
<<<<<<< HEAD
=======



>>>>>>> 3eadd78b1ea915f9bd8809f133d114afd745d30c
