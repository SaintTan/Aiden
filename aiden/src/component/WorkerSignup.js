import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import { PrimButton} from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';
import {
    TextField,
    Grid,
    Container
} from "@material-ui/core";

export default class WorkerSignup extends Component{
    constructor(props){
        super(props);
        this.state={
            WorkerPassport: "",
            WorkerName : "",
            WorkerEmail: "",
            WorkerPassword: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){

        const data = {
            type: "Worker",
            name: this.state.WorkerName,
            passport: this.state.WorkerPassport,
            email: this.state.WorkerEmail,
            password: this.state.WorkerPassword
            
        };
        axios.post("/signup", data).then(res => {
            console.log("Worker data submitted to secure database!");
            this.setState({redirect:"login"});

        }).catch(err => {
            console.log(err);
        });

        e.preventDefault();
        
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
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
                        <form style={styles.formLayout}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                <label>Passport Number:</label>
                                <TextField
                                    onChange = {this.handleChange}
                                    type="text"
                                    name="WorkerPassport"
                                    id="passport"/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <label>Worker Full Name:</label>
                                    <TextField
                                        onChange = {this.handleChange}
                                        type="text"
                                        name="WorkerName"
                                        id="name"/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <label>Password:</label>
                                    <TextField
                                        onChange = {this.handleChange}
                                        type="text"
                                        name="WorkerPassword"
                                        id="password"/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <label>Email Address:</label>
                                    <TextField
                                        onChange = {this.handleChange}
                                        type="email"
                                        name="WorkerEmail"
                                        id="email"/>
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