import React, { Component } from "react";
import Education from "./components/Education";
import Personal from "./components/Personal";
import RenderInfo from "./components/RenderInfo";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      //Personal Info
      userInfo: {
        Fname: "",
        Lname: "",
        email: "",
        phNumber: "",
      },
      editDisabled: true,
      //Educational Info
      educationInfo: {
        schoolName: "",
        titleOfStudying: "",
        from: "",
        to: ""
      },
      educationEditDisabled: true, 
    };
  }
  handlePersonalInfoChange = (e) => {
    const target = e.target;
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [target.name]: target.value,
      },
    });
  };

  onSubmitPersonalInfo = (e) => {
    e.preventDefault();
    this.disablePersonalForm(e.target.elements);
    this.setState({
      editDisabled: !this.state.editDisabled,
    });
  };

  disablePersonalForm = (formElements) => {
    for (let i = 0; i < 5; i++) {
      formElements[i].disabled = "true";
    }
  };

  formEditable = (formElements) => {
    for (let i = 0; i < 5; i++) {
      formElements[i].disabled = "false";
    }
  };


  //Education Info

  handleEducationInfoChange = (e) => {
    const target = e.target;
    this.setState({
      educationInfo: {
        ...this.state.educationInfo,
        [target.name]: target.value,
      },
    });
  };

  onSubmitEducationInfo = (e) => {
    e.preventDefault();
    this.disableEducationForm(e.target.elements);
    this.setState({
      disableEducationForm: !this.state.disableEducationForm,
    });
  };

  disableEducationForm = (formElements) => {
    for (let i = 0; i < 5; i++) {
      formElements[i].disabled = "true";
    }
  };

  render() {
    const userInfo = this.state.userInfo;
    const editDisabled = this.state.editDisabled;
    const personalFunctions = {
      handleChange: this.handlePersonalInfoChange,
      onSubmitInfo: this.onSubmitPersonalInfo,
      disableForm: this.disablePersonalForm,
    };
    const education = this.state.educationInfo;
    const educationEditDisabled = this.state.educationEditDisabled; 
    const educationFunctions = {
      handleChange: this.handleEducationInfoChange,
      onSubmitInfo: this.onSubmitEducationInfo,
      disableForm: this.disableEducationForm,
    };
    return (
      <>
        <div className="App">
          <div className="appLayout">
            <div className="layout">
              <div className="personal">
                <Personal
                  {...userInfo}
                  editDisabled={editDisabled}
                  {...personalFunctions}
                />
              </div>
              <div className="education">
                <Education {...education} {...educationFunctions} educationEditDisabled = {educationEditDisabled}/>   
              </div>
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
