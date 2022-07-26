import React, { Component } from "react";
import "../styles/Personal.css"

class Personal extends Component {
    constructor() {
     super(); 

     this.state = {
        userInfo: {
            Fname: '',
            Lname: '',
            email: '',
            phNumber: ''
        },
        personalInfo: []
     };
    }
    handleChange = (e) => {
        const target = e.target;
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [target.name]: target.value
            }
        });
    };

    onSubmitInfo = (e) => {
        e.preventDefault();
        // const {Fname, Lname, email, phNumber} = this.state.userInfo; 
        this.setState({
            personalInfo: this.state.personalInfo.concat(this.state.userInfo),
            userInfo: {
                Fname: '',
                Lname: '',
                email: '',
                phNumber: ''
            }
        });
    };

    
    render() {
        const {Fname, Lname, email, phNumber} = this.state.userInfo; 
        return (
            <div>
                <h2>
                    Personal Information
                </h2>
                <form onSubmit={this.onSubmitInfo}>
                    <div className="firstNameDiv">
                        <label htmlFor="name">First Name:</label>
                        <input name="Fname" type="text" value={Fname} id="name" onChange = {this.handleChange}/>
                    </div>
                    <div className="lastNameDiv">
                        <label htmlFor="name">Last Name:</label>
                        <input name="Lname" type="text" value={Lname} id="name" onChange = {this.handleChange}/>
                    </div>
                    <div className="emailDiv">
                        <label htmlFor="email">Email:</label>
                        <input name="email" type="email" value={email} id="email" onChange = {this.handleChange}/>
                    </div>
                    <div className="phNumberDiv">
                        <label htmlFor="phNumber">Phone Number:</label>
                        <input name="phNumber" type="tel" value={phNumber} id="phNumber" onChange = {this.handleChange} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                    </div>
                    <div>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        );
    };

};

export default Personal;