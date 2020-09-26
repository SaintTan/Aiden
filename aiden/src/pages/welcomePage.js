import React, {Component} from "react";

export default class WelcomePage extends Component{
    constructor(props){
        super(props);
        this.state={

        };
    }
    render(){
        return(
            <dev style={styles.pageStyle}>
                <label> Aiden.</label>
            </dev>
        )
    }
}

const styles={
    pageStyle:{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        textAlign: "center",
        width: window.innerWidth,
        height: window.innerHeight,
        overflow: "hidden",
        color: "Grey",
        fontFamily: "avenir",
        fontSize: "3em"
    }
 
}