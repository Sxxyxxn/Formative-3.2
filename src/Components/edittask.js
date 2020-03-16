import React from "react";
import { Component } from "react";
import Nav from "./nav";
import Axios from "axios";
import "../css/sections.css";
import Chef from "../Components/chef";

import { navigate } from "@reach/router";
// import Axios from "axios";
import email from "../images/email.svg";
import phone from "../images/phone.svg";
import edit from "../images/edit.svg";
import cancel from "../images/delete.svg";
import AddUser from "../adduser";
import { logRoles } from "@testing-library/react";

export default class EditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };

    this.myRef = React.createRef();
  }

  componentDidMount() {
    Axios.get(`http://localhost:3002/api/chef/${this.props.id}`).then(res => {
      this.setState({ user: res.data });
    });
  }

  editPerson = e => {
    e.preventDefault();
    var formData = new FormData(this.myRef.current);
    var settings = { headers: { "Content-Type": "multipart/form-data" } };

    var dataToUpdate = {
      first_name: formData.get("first_name")
    };

    Axios.put(
      `http://localhost:3002/api/chef/with-form-image/${this.props.id}`,
      formData,
      settings,
      dataToUpdate
    ).then(res => {
      console.log(res);
    });
  };
  render() {
    return (
      <div>
        <form className="special" onSubmit={this.editPerson} ref={this.myRef}>
          <label>First name</label>
          <input type="text" name="firt_name" />

          <label>Last name:</label>
          <input type="text" name="last_name" />

          <button type="submit" className="edit-btn">
            Update details
          </button>

          <label>Upload file</label>
          <input type="file" name="file" />
        </form>

        <button className="edit-btn">Return Home</button>
      </div>
    );
  }

  // constructor(props) {
  //     super(props);
  //     this.state = { user: {} };
  //     // get handle on the DOM element
  //     this.myRef = React.createRef();
  //   }
  //   componentDidMount() {
  //     Axios.get("http://localhost:3002/api/chef").then(res => {
  //         this.setState({ users: res.data });
  //         console.log(this.state.users)

  //       });
  //   }

  //   editPerson = e => {
  //     e.preventDefault();
  //     var formData = new FormData(this.myRef.current);
  //     var dataToSend = {
  //       first_name: formData.get("first_name"),
  //       last_name: formData.get("last_name"),
  //       age: formData.get("age"),
  //       wins: formData.get("wins"),
  //       fights: formData.get("fights"),
  //       draws: formData.get("draws"),
  //       id: formData.get("id")
  //     };

  //     Axios.put(
  //       `http://localhost:3002/api/chef/${this.props.id}`,
  //       dataToSend
  //     ).then(res => {
  //       console.log(res);
  //     });
  //   };

  //   render() {
  //     const { first_name, last_name, age, fights, wins, draws } = this.state.user;

  //     return (
  //       <div className="edit-form-wrapper">
  //         <h1>Edit Employee</h1>
  //         <form className="special" onSubmit={this.editPerson} ref={this.myRef}>
  //           <label>First name:</label>
  //           <input type="text" name="first_name" defaultValue={first_name} />

  //           <label>Last name:</label>
  //           <input type="text" name="last_name" defaultValue={last_name} />

  //           <label>Age:</label>
  //           <input type="text" name="age" defaultValue={age} />

  //           <label>Fights:</label>
  //           <input type="text" name="fights" defaultValue={fights} />

  //           <label>Wins:</label>
  //           <input type="text" name="wins" defaultValue={wins} />

  //           <label>Draws:</label>
  //           <input type="text" name="draws" defaultValue={draws} />

  //           <br />
  //           <button type="submit" className="add-button">
  //             Update details
  //           </button>
  //         </form>
  //         <button className="add-button">Return Home</button>
  //       </div>
  //     );
  //   }
}
