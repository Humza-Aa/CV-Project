import React, { Component } from "react";
import "../styles/Personal.css";

class Personal extends Component {
  render() {
    const {
      Fname,
      Lname,
      email,
      phNumber,
      editDisabled,
      onSubmitInfo,
      handleChange,
    } = this.props;
    console.log(editDisabled);
    return (
      <div>
        <h2>Personal Information</h2>
        <form className="formLayout" onSubmit={onSubmitInfo}>
          <div className="firstNameDiv">
            <label htmlFor="Fname" className="labels">
              First Name:
            </label>
            <input
              name="Fname"
              type="text"
              value={Fname}
              id="Fname"
              onChange={handleChange}
              required
              disabled={!editDisabled}
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
              onChange={handleChange}
              required
              disabled={!editDisabled}
            />
          </div>
          <div className="emailDiv">
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="email"
              value={email}
              id="email"
              onChange={handleChange}
              required
              disabled={!editDisabled}
            />
          </div>
          <div className="phNumberDiv">
            <label htmlFor="phNumber">Phone Number:</label>
            <input
              name="phNumber"
              type="tel"
              value={phNumber}
              id="phNumber"
              onChange={handleChange}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              disabled={!editDisabled}
            />
          </div>
          <div id="saveBtn">
            <button type="submit" disabled={!editDisabled}>
              Save
            </button>
            <button className="edit" type="submit" disabled={editDisabled}>
              Edit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Personal;
