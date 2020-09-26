import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import {
    TextField,
    Grid,
    Container
} from "@material-ui/core";

export default class AdminPage extends Component{
    constructor(props){
        super(props)
        this.state={
            totalNumEmp : "",
            totalNumCus : "",
            EmpInfected : [],
            EmpNotified : []
        }
    }
    render(){
        return(
            <Container component="main" maxWidth="xs" >
                <div>
                    <label>Managing # Employee: </label>
                    <label>Total infected: </label>
                    <label>Total notified: </label>
                </div>
            </Container>
            
            
        )
    }
}

