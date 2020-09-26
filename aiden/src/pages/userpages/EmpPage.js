import React, { Component } from "react";
import {H2} from '../../component/theme';
import QRCode from "react-qr-code";
import {Redirect} from "react-router-dom";

import {
    TextField,
    Grid,
    Button,
    Box,
    Container
} from "@material-ui/core";

export default class EmpPage extends Component{
    constructor(props){
        super(props)
        this.state={
            userID: localStorage.getItem("userID")
        }
    }
    render(){
        return(
            <Container component="main" maxWidth="xs" >
                <H2>
                    Your QR Code:
                </H2>
                <QRCode value={this.state.userID}/> 
            </Container>
            
            
        )
    }
}

