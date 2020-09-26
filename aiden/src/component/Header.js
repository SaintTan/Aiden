import React, {Component} from "react";
import {
    AppBar,
    Toolbar,
    Link,
    Button,
    Box
} from "@material-ui/core";

export default class Header extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div style={styles.root}>
                <AppBar style={styles.navBar}>
                    <Toolbar>
                        <Link style={styles.logo} href="/">
                            Aiden.
                        </Link>
                        <Button style={styles.menuButton} href="/login">Login</Button>
                        <Button style={styles.menuButton} href="/signup">Sign up</Button>
                    </Toolbar>
                </AppBar>
                <Box style={{height: '8vh'}}/>
            </div>
        )
    }
}

const styles ={
    root:{
        flexGrow: 1,

    },
    navBar: {
        backgroundColor: '#f6f6f6',
        position: "fixed"
    },
    menuButton:{
          color: '#002E18',
          fontFamily: ['avenir','helvetica'],
          fontSize: 12,
          textTransform: 'uppercase',
          letterSpacing: 2,
          fontWeight: 'bold'
    },
    logo: {
        flexGrow: 1,
        color: '#002E18',
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: [
            'futura',
            'serif',
        ],
        letterSpacing: 2,
        '&:hover': {
            textDecoration: 'none',
        },
    }
}