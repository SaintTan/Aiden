import React, { Component } from "react";

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            company: '',
            email: '',
            password: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    render(){
        return(
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
        );
    }
}