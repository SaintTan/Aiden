import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import { PrimButton, TextLink } from '../component/theme';
import {
    TextField,
    Grid,
    Container,
    CssBaseline
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
        //ask and confirm user type
        localStorage.setItem("usertype", "user");
        localStorage.setItem("userID", "101");
        localStorage.setItem("loggedIn", true);
        this.setState({redirect: "user"});
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
                <Container component="main" maxWidth="xs" >
                    <CssBaseline />
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
                                <PrimButton
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    style={styles.submit}>
                                    Login
                                </PrimButton>

                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <TextLink href="/signup">
                                            Don't have an account? Sign up Here!
                                        </TextLink>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
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
        alignItems: "center",
        marginTop: 8*3,
    },
    laybelStyle:{
        display:"flex",
        marginTop: 10
    },
    textField: {
        margin: "4px 0px 4px",
    },
    submit:{}
}