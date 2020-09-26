import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import { PrimButton, H2} from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
    TextField,
    Grid,
    Container
} from "@material-ui/core";
import axios from "axios";

export default class UserSignup extends Component{
    constructor(props){
        super(props);
        this.state={
            userName : "",
            userEmail : "",
            passportNum : "",
            password : ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }
    
    handleSubmit(e){
        
        const userData = this.state;
        axios.post("/signup", {userData}).then(res => {
            console.log("Data submitted to db!");
            console.log(res.data);

        }).catch(err => {
            console.log(err);
        });

        e.preventDefault();     

    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    
    }

    render(){
        return(
            <Container component="main" maxWidth="xs" >
                <CssBaseline />
                <div style={styles.paper}>
                    <form style={styles.formLayout}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                            <label>Full Name:</label>
                            <TextField
                                onChange = {this.handleChange}
                                type="text"
                                name="userName"
                                id="userName"/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <label>Email:</label>
                                <TextField
                                    onChange = {this.handleChange}
                                    type="email"
                                    name="userEmail"
                                    id="email"/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <label>Passport Number:</label>
                                <TextField
                                    onChange = {this.handleChange}
                                    type="text"
                                    name="passportNum"
                                    id="passport"/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <label>Password:</label>
                                <TextField
                                    onChange = {this.handleChange}
                                    type="password"
                                    name="password"
                                    id="password"/>
                            </Grid>
                        </Grid>
                        <PrimButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={styles.submit}
                            onClick = {this.handleSubmit}>
                            Sign Up
                        </PrimButton>
                    </form>
                </div>
            </Container>
        )
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
    submit:{

    }
}