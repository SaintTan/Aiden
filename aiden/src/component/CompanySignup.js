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
                <input type="text"></input>
                <input type="text"></input>
                <input type="email"></input>
                <input type="password"></input>
            </form>
        )
    }
}