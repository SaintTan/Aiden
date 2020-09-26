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
                <div style={styles.pageLayout}>
                    <form onSubmit = {this.handleSubmit} style={styles.formLayout}>
                        <label style={styles.laybelStyle}>
                            Company:
                            <input name="company" type="text" value={this.state.company} onChange={this.handleChange}/>
                        </label>
                        <label style={styles.laybelStyle}>
                            Email:
                            <input name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                        </label>
                        <label style={styles.laybelStyle}>
                            Password:
                            <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                        </label>
                        <div style={styles.laybelStyle}>
                            <button name="signup" onClick={this.handleSignup}>SignUp</button>
                        </div>
                    </form>
                   
                </div>
            );
        }
    }
}

const styles={
    pageLayout:{
        verticalAlign: "baseline",
        height: window.innerHeight,
        display:"flex",
        alignItems:"center",
        flexDirection: "column",
        width:"40%",
        flexWrap: "wrap",
        margin: "auto",
    },
    formLayout:{
        margin: "auto",
        flexDirection: "column",
        alignItems:"center"
    },
    laybelStyle:{
        display:"flex",
        marginTop: 10
    }
}