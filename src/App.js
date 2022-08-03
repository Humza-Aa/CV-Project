import React, { Component } from "react";
import Education from "./components/Education";
import Personal from "./components/Personal";
import PracticalExperience from "./components/PracticalExp";
import RenderEducationInfo from "./components/RenderEducationInfo";
import RenderInfo from "./components/RenderPersonalInfo";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Personal Info
      userInfo: {
        Fname: "",
        Lname: "",
        email: "",
        phNumber: "",
      },
      editDisabled: true,

      practExperienceinfo: {
        companyName: "",
        positionTitle: "",
        mainTasks: "",
        fromk: "",
        tok: "",
      },
      practExpEditDisabled: true,
      practExperienceinfoAll: [],
      counter: 0,
      practExpindex: 0,
      editPractExpButton: true,

      educationInfo: {
        schoolName: "",
        titleOfStudy: "",
        from: "",
        to: "",
      },
      //educationEditDisabled: true,
      educationInfoAll: [],
      index: 0,
      educationIndex: 0,
      editEducationButton: true,
    };
     //Practical Experience Info
    // this.state = {
    //   practExperienceinfo: {
    //     companyName: "",
    //     positionTitle: "",
    //     mainTasks: "",
    //     fromk: "",
    //     tok: "",
    //   },
    //   practExpEditDisabled: true,
    //   practExperienceinfoAll: [],
    //   counter: 0,
    //   practExpindex: 0,
    //   editPractExpButton: true,
    // };
    //Educational Info
    // this.state = {
    //   educationInfo: {
    //     schoolName: "",
    //     titleOfStudy: "",
    //     from: "",
    //     to: "",
    //   },
    //   //educationEditDisabled: true,
    //   educationInfoAll: [],
    //   index: 0,
    //   educationIndex: 0,
    //   editEducationButton: true,
    // };
   
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
      educationInfoAll: this.state.educationInfoAll.concat(
        this.state.educationInfo
      ),
      educationInfo: {
        schoolName: "",
        titleOfStudy: "",
        from: "",
        to: "",
      },
      editEducationButton: false,
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
        to: currentInfo.to,
      },
      educationInfoAll: educationInfo,
    });
    if (this.state.educationIndex === this.state.educationInfoAll.length) {
      this.setState({
        educationIndex: this.state.educationIndex + 1,
      });
    } else {
      this.setState({
        educationIndex: 0,
      });
    }
    this.setState({
      editEducationButton: true,
    });
  };

  // Practical Experience Functions
  handlePractExpInfoChange = (e) => {
    const target = e.target;
    this.setState({
      practExperienceinfo: {
        ...this.state.practExperienceinfo,
        [target.name]: target.value,
      },
    });
  };

  onSubmitPractExpInfo = (e) => {
    e.preventDefault();

    this.setState({
      practExperienceinfoAll: this.state.practExperienceinfoAll.concat(
        this.state.practExperienceinfo
      ),
      practExperienceinfo: {
        companyName: "",
        positionTitle: "",
        mainTasks: "",
        from: "",
        to: "",
      },
      editPractExpButton: false,
    });
  };

  getEditPractExpInfo = () => {
    const practExperienceinfo = [...this.state.practExperienceinfoAll];
    const currentInfo = practExperienceinfo[this.state.practExpindex];
    practExperienceinfo.splice(this.state.practExpindex, 1);

    this.setState({
      practExperienceinfo: {
        companyName: currentInfo.companyName,
        positionTitle: currentInfo.positionTitle,
        mainTasks: currentInfo.mainTasks,
        from: currentInfo.from,
        to: currentInfo.to,
      },
      practExperienceinfoAll: practExperienceinfo,
    });
    if (this.state.practExpindex === this.state.practExperienceinfoAll.length) {
      this.setState({
        practExpindex: this.state.practExpindex + 1,
      });
    } else {
      this.setState({
        practExpindex: 0,
      });
    }
    this.setState({
      editPractExpButton: true,
    });
  };

  render() {
    const userInfo = this.state.userInfo;
    const editDisabled = this.state.editDisabled;
    console.log(editDisabled)
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
      return (
        <>
          {index > 0 && <h5>Education Experience Number {index + 1}</h5>}
          <RenderEducationInfo key={index} educationInfo={info} />
        </>
      );
    });
    const practExp = this.state.practExperienceinfo;
    const editPractExpButton = this.state.editPractExpButton;
    const practExpFunctions = {
      handleChange: this.handlePractExpInfoChange,
      onSubmitInfo: this.onSubmitPractExpInfo,
      getEditPractExpInfo: this.getEditPractExpInfo,
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
                <Education
                  {...education}
                  {...educationFunctions}
                  editEducationButton={editEducationButton}
                />
              </div>
              <div>
                <PracticalExperience
                  {...practExp}
                  {...practExpFunctions}
                  editPractExpButton={editPractExpButton}
                />
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
              <div className="practicalExperience">
                <h2>Practical Experience</h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
