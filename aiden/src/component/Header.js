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
            <AppBar>
                <Toolbar>
                    <Link href="/">
                        Aiden.
                    </Link>
                    <Button href="/login">Login</Button>
                    <Button href="/signup">Sign up</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export function SpaceBox(){
    return(
        <Box/>
    )
}