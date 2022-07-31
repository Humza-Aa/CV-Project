import React, { Component } from "react";
import Education from "./components/Education";
import Personal from "./components/Personal";
import RenderEducationInfo from "./components/RenderEducationInfo";
import RenderInfo from "./components/RenderPersonalInfo";
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
        titleOfStudy: "",
        from: "",
        to: ""
      },
      educationEditDisabled: true, 
      educationInfoAll: [],
      index: 0,
      educationIndex:0,
      editEducationButton: true
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

    this.setState({
      educationInfoAll: this.state.educationInfoAll.concat(this.state.educationInfo),
      educationInfo: {
        schoolName: "",
        titleOfStudy: "",
        from: "",
        to: ""
      },
      editEducationButton: false      
    });
  };

  getEditEducationInfo = () => {
    const educationInfo = [...this.state.educationInfoAll];
    const currentInfo = educationInfo[this.state.educationIndex];
    educationInfo.splice(this.state.educationIndex, 1);

    this.setState({
      educationInfo: {
        schoolName: currentInfo.schoolName,
        titleOfStudy: currentInfo.titleOfStudy,
        from: currentInfo.from,
        to: currentInfo.to
      }, 
      educationInfoAll: educationInfo,
    })
    if (this.state.educationIndex === this.state.educationInfoAll.length) {
      this.setState({
        educationIndex: this.state.educationIndex + 1,
      })
    }
    else {
      this.setState({
        educationIndex: 0,
      })
    }
    this.setState({
      editEducationButton: true,
    })
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
    const editEducationButton = this.state.editEducationButton;
    const educationFunctions = {
      handleChange: this.handleEducationInfoChange,
      onSubmitInfo: this.onSubmitEducationInfo,
      getEditEducationInfo: this.getEditEducationInfo,
    };

    const educationRender = this.state.educationInfoAll.map((info, index) => {
      return(
        <>
          {(index > 0) && <h5>Education Experience Number {index+1}</h5>}
          <RenderEducationInfo key={index} educationInfo={info}/>
        </>
      )
    });
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
                <Education {...education} {...educationFunctions} editEducationButton = {editEducationButton}/>   
              </div>
            </div>
          </div>
          <div className="appLayout">
            <div className="layoutRender">
              <div className="personal">
                <RenderInfo {...userInfo} />
              </div>
              <div className="education">
                <h2>Education Information</h2>
                {educationRender}
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
