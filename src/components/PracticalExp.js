import React, { Component } from "react";
import "../styles/PracticalInfo.css"

class PracticalExperience extends Component {
  render() {
    const {
        companyName,
        positionTitle,
        mainTasks,
        from,
        to,
        onSubmitInfo,
        handleChange,
        getEditPractExpInfo,
        editPractExpButton,
      } = this.props;
    return (
      <div>
        <h2>Practical Experience</h2>
        <form className="form-Layout" onSubmit={onSubmitInfo}>
          <div className="companyNameDiv">
            <label htmlFor="companyName" className="labels">
              Company Name:
            </label>
            <input
              name="companyName"
              type="text"
              value={companyName}
              id="companyName"
              onChange={handleChange}
              required
            />
          </div>
          <div className="positionTitleDiv">
            <label htmlFor="positionTitle" className="labels">
                Position Title:
            </label>
            <input
              name="positionTitle"
              type="text"
              value={positionTitle}
              id="positionTitle"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mainTaskDiv">
            <label htmlFor="mainTask" className="labels">
                Main Tasks:
            </label>
            <input
              name="mainTasks"
              type="text"
              value={mainTasks}
              id="mainTasks"
              onChange={handleChange}
              required
            />
          </div>
          <div className="from-Div">
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
          <div className="to-Div">
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
          <div id="save-Btn">
            <button type="submit">Save</button>
            <button
              className="edit"
              type="button"
              onClick={getEditPractExpInfo}
              disabled={editPractExpButton}
            >
              Edit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PracticalExperience;
