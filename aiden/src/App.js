import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header";
import WelcomePage from "./pages/welcomePage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signupPage";

export default class App extends Component{
    render(){
        return(
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" render={props => <WelcomePage {...props}/> }/>
                    <Route exact path="/login" render={props => <LoginPage {...props}/>}/>
                    <Route exact path="/signup" render={props => <SignUpPage {...props}/>}/>
                </Switch>
            </Router>
        );
    }
}