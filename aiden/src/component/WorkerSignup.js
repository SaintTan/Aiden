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
            WorkerPassword: "",
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
                <Container component="main" maxWidth="xs" style={styles.container}>
                    <CssBaseline />
                    <div style={styles.paper}>
                        <form style={styles.formLayout}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                <label style={styles.textField}>Passport Number:</label>
                                <TextField
                                    onChange = {this.handleChange}
                                    type="text"
                                    name="WorkerPassport"
                                    style={styles.textField}
                                    id="passport"/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <label style={styles.textField}>Worker Full Name:</label>
                                    <TextField
                                        onChange = {this.handleChange}
                                        type="text"
                                        name="WorkerName"
                                        style={styles.textField}
                                        id="name"/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <label style={styles.textField}>Password:</label>
                                    <TextField
                                        onChange = {this.handleChange}
                                        type="text"
                                        name="WorkerPassword"
                                        style={styles.textField}
                                        id="password"/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <label style={styles.textField}>Email Address:</label>
                                    <TextField
                                        onChange = {this.handleChange}
                                        type="email"
                                        name="WorkerEmail"
                                        style={styles.textField}
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
    container:{
        marginTop: 8*5,
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:"100%"
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
        marginLeft: "25%",
        marginRight: "25%"
    },
    submit:{
        marginTop:"30%",
        marginLeft: "auto",
        marginRight: "auto"
    }
}