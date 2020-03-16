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

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  userSubmit = e => {
    e.preventDefault();
    console.log("A user was submitted");

    var formData = new FormData(this.myRef.current);

    var dataToCreate = {
      first_name: formData.get("task-title"),
      last_name: formData.get("task-discription")
    };

    Axios.post(`http://localhost:3002/api/chef`, dataToCreate).then(res => {
      console.log(res.data);
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.userSubmit} ref={this.myRef}>
          <label>Task Title</label>
          <input type="text" name="task-title" required />

          <label>Task Description</label>
          <input type="text" name="task-discription" required />

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
