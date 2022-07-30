import React, { Component } from "react";

class Education extends Component {
  render() {
    const {
      schoolName,
      titleOfStudy,
      from,
      to,
      educationEditDisabled,
      onSubmitInfo,
      handleChange,
    } = this.props;
    return (
      <div>
        <h2>Education Information</h2>
        <form className="formLayout" onSubmit={onSubmitInfo}>
          <div className="schoolNameDiv">
            <label htmlFor="schoolName" className="labels">
              School Name:
            </label>
            <input
              name="schoolName"
              type="text"
              value={schoolName}
              id="schoolName"
              onChange={handleChange}
              required
              disabled={!educationEditDisabled}
            />
          </div>
          <div className="titleOfStudyDiv">
            <label htmlFor="titleOfStudy" className="labels">
              Title Of Study:
            </label>
            <input
              name="titleOfStudy"
              type="text"
              value={titleOfStudy}
              id="titleOfStudy"
              onChange={handleChange}
              required
              disabled={!educationEditDisabled}
            />
          </div>
          <div className="fromDiv">
            <label htmlFor="from">From:</label>
            <input
              name="from"
              type="date"
              value={from}
              id="from"
              onChange={handleChange}
              required
              disabled={!educationEditDisabled}
            />
          </div>
          <div className="toDiv">
            <label htmlFor="to">To:</label>
            <input
              name="to"
              type="date"
              value={to}
              id="to"
              onChange={handleChange}
              required
              disabled={!educationEditDisabled}
            />
          </div>
          <div id="saveBtn">
            <button type="submit" disabled={!educationEditDisabled}>
              Save
            </button>
            <button className="edit" type="submit" disabled={educationEditDisabled}>
              Edit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Education;
