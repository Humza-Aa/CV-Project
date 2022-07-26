import React, { Component } from "react";
import Personal from "./components/Personal";
import  "./styles/App.css";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="layout">
          <div>
            <Personal />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default App;
