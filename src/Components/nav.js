import React from "react";
import { Component } from "react";
import { Link } from "@reach/router";
import menu from "../images/menu.png"
import back from "../images/back.png"
// import '../css/nav.css'

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul >
          <li>
            <Link  to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/chef">
              chef
            </Link>
          </li>

        </ul>
      </nav>
    );
  }
}


