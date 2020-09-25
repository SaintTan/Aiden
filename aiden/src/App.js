import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header";
import SpaceBox from "./component/Header";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";

export default class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Header/>
                    <SpaceBox/>
                </div>
                <div>
                    <Switch>
                        <Route exact path="/login" render={props => <LoginPage {...props}/>}/>
                        <Route exact path="/signup" render={props => <SignUpPage {...props}/>}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}