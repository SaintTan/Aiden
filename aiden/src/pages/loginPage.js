import React, { Component } from "react";
import {Redirect} from "react-router-dom"
import {
    TextField,
    Grid
} from "@material-ui/core";

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
                <div style={styles.paper}>
                    <form onSubmit = {this.handleSubmit} style={styles.formLayout}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    name="company" 
                                    type="text" 
                                    value={this.state.company} 
                                    id="company"
                                    label="company"
                                    onChange={this.handleChange}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    name="email" 
                                    type="email" 
                                    value={this.state.email} 
                                    id="email"
                                    label="email"
                                    onChange={this.handleChange}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                name="password" 
                                type="password" 
                                value={this.state.password}
                                id="password" 
                                label="password"  
                                onChange={this.handleChange}/>
                            </Grid>
                            
                            <div>
                                <button style={styles.button} name="" onClick={this.handleSignup}>SignUp</button>
                                <button style={styles.button} name="signup" onClick={this.handleSignup}>SignUp</button>
                            </div>
                        </Grid>
                    </form>
                </div>
            );
        }
    }
}

const styles={
    paper: {
        marginTop: 8*2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        marginBottom: 8,
        backgroundColor: '#99C015',
    },
    formLayout:{
        width: '100%',
      marginTop: 8*3,
    },
    laybelStyle:{
        display:"flex",
        marginTop: 10
    },
    textField: {
        margin: "4px 0px 4px",
    },
    button:{
        background: 'transparent',
        border: '2px solid',
        borderColor:'#99C015',
        borderRadius: 3,
        color: '#99C015',
        height: 48,
        padding: '0 30px',
        fontFamily: ['avenir','roboto'],
        margin: "16px 32px 16px 32px",
        letterSpacing: 3,
        fontSize:18,
        fontWeight: 'bold',
        '&:hover': {
            background: "#638709",
            color: '#fff',
        }
    }
}