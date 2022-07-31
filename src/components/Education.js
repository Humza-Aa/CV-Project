import React, { Component } from "react";

class Education extends Component {
  render() {
    const {
      schoolName,
      titleOfStudy,
      from,
      to,
      onSubmitInfo,
      handleChange,
      getEditEducationInfo,
      editEducationButton
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
            />
          </div>
          <div id="saveBtn">
            <button type="submit">
              Save
            </button>
            <button className="edit" type="button" onClick={getEditEducationInfo} disabled={editEducationButton}>
              Edit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Education;
