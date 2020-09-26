import React, { Component } from "react";
import QrReader from 'react-qr-reader'
import {
    Container
} from "@material-ui/core";

export default class AdminPage extends Component{
    constructor(props){
        super(props)
        this.state={
            totalNumEmp : "",
            totalNumCus : "",
            EmpInfected : [],
            EmpNotified : [],
            result: "",
        }
        this.handleScan = this.handleScan.bind(this);
        this.handleError = this.handleError.bind(this);
    }
    handleScan = data => {
        if (data) {
          this.setState({
            result: data
          })
        }
    }

    handleError = err => {
        console.error(err)
    }

    render(){
        return(
            <Container component="main" maxWidth="xs" >
                <div>
                    <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: '100%' }}
                    />
                    <p>{this.state.result}</p>
                </div>
                <div>
                    <label>Managing # Employee: </label>
                    <label>Total infected: </label>
                    <label>Total notified: </label>
                </div>

            </Container>
            
            
        )
    }
}

