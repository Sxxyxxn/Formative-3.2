import React from "react";
import { Link } from "@reach/router";

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="home_screen">
          <div className="categories-main">
            <Link className="my-links" to="/gardener">
              <div className="section-1"> </div>
            </Link>

            <Link className="my-links" to="/cleaner">
              <div className="section-2"></div>
            </Link>

            <Link className="my-links" to="/cleaner">
              <div className="section-3"></div>
            </Link>

            <Link className="my-links" to="/watchman">
              <div className="section-4"></div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
