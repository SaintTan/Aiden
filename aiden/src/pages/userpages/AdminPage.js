import React, {Component} from "react";
import {Text} from "react-native";

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
                <Text>Managing # Employee: </Text>
                <Text>Total infected: </Text>
                <Text>Total notified: </Text>
            </div>
            
        )
    }
}