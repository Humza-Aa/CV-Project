import React, {Component} from "react";
import "../styles/RenderInfo.css";

class RenderEducationInfo extends Component {
    render() {
        const {schoolName, titleOfStudy, from, to} = this.props.educationInfo;
        return(
            <div>
                <div className="infoList">
                    <div className="personalInfo">
                        <h6>School Name:</h6>
                        <p>{schoolName}</p>
                    </div>
                    <div className="personalInfo">
                        <h6>Title of Study:</h6>
                        <p>{titleOfStudy}</p>
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

export default RenderEducationInfo;