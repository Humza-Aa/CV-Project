import React, {Component} from "react";
import "../styles/RenderInfo.css";

class RenderPersonalInfo extends Component {
    render() {
        return(
            <div>
                <h2>Personal Information</h2>
                <div className="infoList">
                    <div className="personalInfo">
                        <h6>First Name:</h6>
                        <p>{this.props.Fname}</p>
                    </div>
                    <div className="personalInfo">
                        <h6>Last Name:</h6>
                        <p>{this.props.Lname}</p>
                    </div>
                    <div className="personalInfo">
                        <h6>Email:</h6>
                        <p>{this.props.email}</p>
                    </div>
                    <div className="personalInfo">
                        <h6>Phone Number:</h6>
                        <p>{this.props.phNumber}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default RenderPersonalInfo;