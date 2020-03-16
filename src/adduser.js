// import React from "react";
// import { Component } from "react";

// import "./css/sections.css";
// import Axios from "axios";
// // import email from "../images/email.svg"
// // import phone from "../images/phone.svg"
// // import edit from "../images/edit.svg"
// // import cancel from "../images/delete.svg"


// export default class AddUser extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { user: {} };
//         this.myRef = React.createRef();
//     }
//     componentDidMount() {
//         this.addUser();
//     }

//     addUser = e => {
//         e.preventDefault();
//         // grab reference to the form data
//         var formData = new FormData(this.myRef.current);
//         // transfer into temp obj, ready to send
//         var dataToSend = {
//             first_name: formData.get("first_name"),
//             last_name: formData.get("last_name"),
//             age: formData.get("age"),
//             wins: formData.get("wins"),
//             fights: formData.get("fights"),
//             draws: formData.get("draws")
//         };

//         Axios.post(
//             `http://localhost:3000/api/chefs/`,
//             dataToSend
//         ).then(res => {
//             console.log(res);
//         });
//     };

//     render() {

//         return (
//             <div className="edit-form-wrapper">
//                 <h1>Add user</h1>
//                 <form className="special" onSubmit={this.addUser} ref={this.myRef}>
//                     <label>First name:</label>
//                     <input type="text" name="first_name" />

//                     <label>Last name:</label>
//                     <input type="text" name="last_name" />

//                     <label>Age:</label>
//                     <input type="text" name="age" />

//                     <label>Fights:</label>
//                     <input type="text" name="fights" />

//                     <label>Wins:</label>
//                     <input type="text" name="wins" />

//                     <label>Draws:</label>
//                     <input type="text" name="draws" />

//                     <br />
//                     <button type="submit" className="add-button">
//                         Update details
//           </button>
//                 </form>

//             </div>
//         );
//     }
// }