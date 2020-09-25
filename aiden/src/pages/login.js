import React, { Component } from "react";
import {Redirect} from "react-router-dom"

export default class LoginPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            company: '',
            email: '',
            password: '',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
      }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e){
        
    }

    handleSignup(e){
        this.setState({redirect: e.target.name})
    }
    
    render(){
        if(this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }
        else{
            return(
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <label>
                            Company:
                            <input name="company" type="text" value={this.state.company} onChange={this.handleChange}/>
                        </label>
                        <label>
                            Email:
                            <input name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                        </label>
                        <label>
                            Password:
                            <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                        </label>
                    </form>
                    <div>
                        <button name="signup" onClick={this.handleSignup}>SignUp</button>
                    </div>
                </div>
            );
        }
    }
}