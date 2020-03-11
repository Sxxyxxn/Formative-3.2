import React from "react";
import { Link } from "@reach/router";
import menu from "../images/menu.png"
import back from "../images/back.png"
// import '../css/nav.css'

class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="navigation">
          <div className="back-icon">
            <Link className="my-links" to="/">
            <img src={back} alt="menu" height="20"/>   
            </Link>
          </div>
          <div className="logo-icon">
        
            <Link className="my-links" to="/">
            Logo
            </Link>
          </div>
          <div className="menu-icon">
        
            <Link className="my-links" to="/">
            <img src={menu} alt="menu" height="20"/> 
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
