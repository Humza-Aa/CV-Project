import React, { Component } from "react";
import "../styles/RenderInfo.css";

class RenderPracticalInfo extends Component {
  render() {
    console.log(this.props);
    const {companyName, positionTitle, mainTasks, from, to } =
      this.props.practicalInfo;
    return (
      <div>
        <div className="infoList">
          <div className="personalInfo">
            <h6>Company Name:</h6>
            <p>{companyName}</p>
          </div>
          <div className="personalInfo">
            <h6>Position Title:</h6>
            <p>{positionTitle}</p>
          </div>
          <div className="personalInfo">
            <h6>Main Tasks:</h6>
            <p>{mainTasks}</p>
          </div>
          <div className="personalInfo">
            <h6>From:</h6>
            <p>{from}</p>
          </div>
          <div className="personalInfo">
            <h6>To:</h6>
            <p>{to}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RenderPracticalInfo;
