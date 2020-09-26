import React, {Component} from "react";

export default class WelcomePage extends Component{
    constructor(props){
        super(props);
        this.state={

        };
    }
    render(){
        return(
            <dev style={styles.pageLayout}>
                <label style={styles.pageLayout}> Aiden.</label>
                <label style={styles.pageLayout}> Medical Safety</label>
            </dev>
        )
    }
}

const styles={
    pageLayout:{
        display:"flex",
        flexDirection: "column",
        flexWrap: "wrap",
        marginLeft: "auto",
        marginRight: "auto",
    },
    textCenter:{

    }
}