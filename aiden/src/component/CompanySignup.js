import React,{Component} from "react";

export default class CompanySignup extends Component{
    constructor(props){
        super(props);
        this.state={
            companyName : "",
            companyAddr : "",
            companyEmail: "",
            companyPwrd: ""
        }
    }
    render(){
        return(
            <form>
                <label>Company Name:</label>
                <input type="text"></input>
                <label>Company Address:</label>
                <input type="text"></input>
                <label>Company Email:</label>
                <input type="email"></input>
                <label>Password:</label>
                <input type="password"></input>
            </form>
        )
    }
}