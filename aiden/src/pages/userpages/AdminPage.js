import React, {Component} from "react";

export default class AdminPage extends Component{
    constructor(props){
        super(props)
        this.state={
            totalNumEmp = "",
            totalNumCus = "",
            EmpInfected = [],
            EmpNotified = []
        }
    }
    render(){
        return(
            <div>
                <label>Managing # Employee: </label>
                <label>Total infected: </label>
                <label>Total notified: </label>
            </div>
            
        )
    }
}