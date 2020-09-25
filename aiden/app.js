import React, { Component } from "react";

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