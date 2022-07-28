import React, { Component } from "react";
import RenderInfo from "./components/RenderInfo";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      userInfo: {
        Fname: "",
        Lname: "",
        email: "",
        phNumber: "",
      },
      editDisabled: true,
    };
  }
  handleChange = (e) => {
    const target = e.target;
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [target.name]: target.value,
      },
    });
  };

  onSubmitInfo = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    this.disableForm(e.target.elements);
    this.setState({
      editDisabled: !this.state.editDisabled,
    });
  };

  disableForm = (formElements) => {
    console.log(formElements);
    for (let i = 0; i < 5; i++) {
      formElements[i].disabled = "true";
    }
  };

  formEditable = (formElements) => {
    for (let i = 0; i < 5; i++) {
      formElements[i].disabled = "false";
    }
  };

  render() {
    const { Fname, Lname, email, phNumber } = this.state.userInfo;
    const userInfo = this.state.userInfo;
    return (
      <>
        <div className="App">
          <div className="appLayout">
            <div className="layout">
              <div className="personal">
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
              </div>
              <div className="education">
                <h2>Educational Experiences</h2>
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
              <div></div>
            </div>
          </div>
          <div className="appLayout">
            <div className="layout">
              <div className="personal">
                <RenderInfo {...userInfo} />
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
