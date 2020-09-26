import React, {Component} from "react";
import {
    Container
} from "@material-ui/core";


export default class WelcomePage extends Component{
    constructor(props){
        super(props);
        this.state={

        };
    }
    render(){
        return(
            <div style={styles.divStyle}>
                <Container style={styles.pageStyle}>
                    Aiden.
                </Container>
            </div>
        )
    }
}

const styles={
    pageStyle:{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        textAlign: "center",
        width: "100%",
        height: window.innerHeight,
        overflow: "hidden",
        color: "Grey",
        fontFamily: "avenir",
        fontSize: "3em",
        backgroundPosition: "center center",
        backgroundSize: "cover"
    },
    divStyle:{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        textAlign: "center",
        overflow: "hidden",
        backgroundImage: "url('../images.background.png')",
        color: "white"
    }
}