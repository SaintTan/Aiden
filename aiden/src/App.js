import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login"

export default class App extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/login" render={props => <Login {...props}/>}/>
                </Switch>
            </Router>
        );
    }
}