import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import {styled} from '@material-ui/core/styles';
import {
    TextField,
    Grid,
    Button,
    Container
} from "@material-ui/core";
import Link from '@material-ui/core/Link';

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

