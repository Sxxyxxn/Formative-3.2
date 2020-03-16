// import React from "./node_modules/react";
import React from "react";
import { Component } from "react";
import Nav from "./nav";
import Axios from "axios";
import "../css/sections.css";

import { navigate } from "@reach/router";
// import Axios from "axios";
import email from "../images/email.svg";
import phone from "../images/phone.svg";
import edit from "../images/edit.svg";
import cancel from "../images/delete.svg";
import AddUser from "../adduser";
import { logRoles } from "@testing-library/react";

export default class Chef extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };

    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.getData();
    console.log("haha");
  }

  getData = e => {
    Axios.get("http://localhost:4003/api/chef").then(res => {
      this.setState({ users: res.data });
      console.log(this.state.users);
    });
  };

  onDeleteSuccess = e => {
    this.getData();
  };

  addtask = e => {
    alert("haha");
    navigate("/addtask");
  };
  render() {
    return (
      <div>
        {/* <Nav /> */}

        <div className="header-wrapper">
          <div className="gardner">
            <div className="gardner-img"></div>

            <div className="gardner-bio">Mr Chef</div>
            <div className="gardner-email">
              <div className="email-icon">
                <img src={email} alt="email" /> mrgardner.nz@gmail.com
              </div>{" "}
            </div>
            <div className="gardner-number">
              <div className="email-icon">
                <img src={phone} alt="email" />
                0224590447
              </div>
            </div>
          </div>
        </div>

        <button onClick={this.addtask}>add task</button>
        <ul>
          {this.state.users.map((item, i) => {
            return (
              <InfoList
                key={i}
                col_switch={i}
                first_name={item.first_name}
                last_name={item.last_name}
                age={item.age}
                id={item._id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

class InfoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };

    this.myRef = React.createRef();
  }

  edituser = e => {
    alert("haha");
    navigate("/edittask");
  };

  removePerson = e => {
    e.preventDefault();
    console.log(this.props._id);
    Axios.delete(`http://localhost:4003/api/chef/${this.props.id}`).then(
      res => {
        //  if (res.data.result === true) {
        //    this.props.onDeleteSuccess();
        //  }
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <div className="Garden">
            <div className="garden-wrapper">
              {/* SECTION-1  */}
              {/* SECTION-1  */}
              {/* SECTION-1  */}
              {/* SECTION-1  */}
              {/* SECTION-1  */}

              <div className="gardners-content">
                <div className="colorcode"></div>
                <div className="garden-content-wrapper">
                  <div className="gardner-task-head">
                    <h2>
                      {this.props.first_name} {this.props.last_name}
                    </h2>
                    <h5 className="date">20/03/2020</h5>
                    <div className="edit-icon">
                      <img
                        src={edit}
                        alt="email"
                        className="edit"
                        height="20"
                        onClick={this.edituser}
                      />
                      <img
                        src={cancel}
                        alt="email"
                        className="cancel"
                        height="20"
                        data-uuid={this.props.id}
                        onClick={this.removePerson}
                      />
                    </div>
                  </div>

                  <div className="gardner-task-body">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry 's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
