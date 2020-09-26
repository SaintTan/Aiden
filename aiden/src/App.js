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
                    <Route exact path="/" render={props => <WelcomePage {...props} style={{center}}/> }/>
                    <Route exact path="/login" render={props => <LoginPage {...props} style={{center}}/>}/>
                    <Route exact path="/signup" render={props => <SignUpPage {...props} style={{center}}/>}/>
                </Switch>
            </Router>
        );
    }
}

const center={
    margin: "auto",
    width: "50%",
    border: "3px solid black",
    padding: "10px"
  }