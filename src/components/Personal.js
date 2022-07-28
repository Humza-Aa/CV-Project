import React, { Component } from "react";
import "../styles/Personal.css";

class Personal extends Component {
//   constructor() {
//     super();

//     this.state = {
//       userInfo: {
//         Fname: "",
//         Lname: "",
//         email: "",
//         phNumber: "",
//       },
//       personalInfo: [],
//     };
//   }
//   handleChange = (e) => {
//     const target = e.target;
//     this.setState({
//       userInfo: {
//         ...this.state.userInfo,
//         [target.name]: target.value,
//       },
//     });
//   };

//   onSubmitInfo = (e) => {
//     e.preventDefault();
//     console.log(e);
//     this.setState({
//       personalInfo: this.state.personalInfo.concat(this.state.userInfo),
//       userInfo: {
//         Fname: "",
//         Lname: "",
//         email: "",
//         phNumber: "",
//       },
//     });
//   };

  render() {
    const { Fname, Lname, email, phNumber } = this.props;
    return (
      <div>
        <h2>Personal Information</h2>
        <form className="formLayout" onSubmit={this.onSubmitInfo}>
          <div className="firstNameDiv">
            <label htmlFor="Fname" className="labels">
              First Name:
            </label>
            <input
              name="Fname"
              type="text"
              value={Fname}
              id="Fname"
              onChange={this.handleChange}
              required
              disabled={!this.state.editDisabled}
            />
          </div>
          <div className="lastNameDiv">
            <label htmlFor="Lname" className="labels">
              Last Name:
            </label>
            <input
              name="Lname"
              type="text"
              value={Lname}
              id="Lname"
              onChange={this.handleChange}
              required
              disabled={!this.state.editDisabled}
            />
          </div>
          <div className="emailDiv">
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="email"
              value={email}
              id="email"
              onChange={this.handleChange}
              required
              disabled={!this.state.editDisabled}
            />
          </div>
          <div className="phNumberDiv">
            <label htmlFor="phNumber">Phone Number:</label>
            <input
              name="phNumber"
              type="tel"
              value={phNumber}
              id="phNumber"
              onChange={this.handleChange}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              disabled={!this.state.editDisabled}
            />
          </div>
          <div id="saveBtn">
            <button type="submit" disabled={!this.state.editDisabled}>
              Save
            </button>
            <button
              className="edit"
              type="submit"
              disabled={this.state.editDisabled}
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Personal;
