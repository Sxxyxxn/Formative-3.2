import React, { Component } from "react";
import "./App.css";
import "./css/home.css";
import { Router } from "@reach/router";
<<<<<<< HEAD
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



=======
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
>>>>>>> 8913c80a25ac3c4cd8b85325e7f12348ba8af3a9
