import React, { Component } from "react";
import Axios from "axios";

export default class AddGardener extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  userSubmit = e => {
    e.preventDefault();
    console.log("A employee was submitted");

    var formData = new FormData(this.myRef.current);

    var dataToCreate = {
      first_name: formData.get("gardener-first-name"),
      last_name: formData.get("gardener-last-name"),
      email: formData.get("gardener-email"),
      phone: formData.get("gardener-phone-number"),
      address: formData.get("gardener-address")
    };
    Axios.post(`http://localhost:4003/api/gardener`, dataToCreate).then(res => {
      console.log(res.data);
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.userSubmit} ref={this.myRef}>
          <label>First Name:</label>
          <input type="text" name="gardener-first-name" required />

          <label>Last Name:</label>
          <input type="text" name="gardener-last-name" required />

          <label>Email:</label>
          <input type="text" name="gardener-email" />

          <label>Phone:</label>
          <input type="text" name="gardener-phone-number" />

          <label>Address:</label>
          <input type="text" name="gardener-address" />

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
