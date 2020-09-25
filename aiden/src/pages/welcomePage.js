import React, {Component} from "react";
import {Text, StyleSheet} from "react-native";
import{
    Container,
} from '@material-ui/core';

export default class WelcomePage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Container>
                <Text>Aiden.</Text>
                <Text>Medical Safety</Text>
            </Container>
        )
    }
}