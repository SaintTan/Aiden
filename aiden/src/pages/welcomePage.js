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
            <Container style={styles.pageStyle}>
                Aiden.
            </Container>
            
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
        backgroundImage: `url(${"../media/background.jpg"})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
    }
 
}