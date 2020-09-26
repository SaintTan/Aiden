import React, {Component} from "react";

export default class UserSignup extends Component{
    constructor(props){
        super(props);
        this.state={
            companyName : "",
            companyEmail : "",
            licenseNum : "",
            password : ""
        }
    }
    render(){
        return(
            <form>
                <label>Company Name:</label>
                <input type="text"></input>
                <label>Company Email:</label>
                <input type="email"></input>
                <label>Passport Number:</label>
                <input type="text"></input>
                <label>Password:</label>
                <input type="password"></input>
            </form>
        )
    }
}