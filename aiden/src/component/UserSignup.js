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
                <input type="text"></input>
                <input type="text"></input>
                <input type="email"></input>
                <input type="password"></input>
            </form>
        )
    }
}