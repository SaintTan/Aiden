import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import { PrimButton, H2} from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
    TextField,
    Grid,
    Container
} from "@material-ui/core";

export default class UserSignup extends Component{
    constructor(props){
        super(props);
        this.state={
            companyName : "",
            companyEmail : "",
            passportNum : "",
            password : ""
        }
    }
    render(){
        return(
            <Container component="main" maxWidth="xs" >
                <CssBaseline />
                <div style={styles.paper}>
                    <form style={styles.formLayout}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                            <label>Company Name:</label>
                            <TextField
                                type="text"
                                name="companyName"
                                id="companyName"/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <label>Email:</label>
                                <TextField
                                    type="email"
                                    name="email"
                                    id="email"/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <label>Passport Number:</label>
                                <TextField
                                    type="text"
                                    name="passport"
                                    id="passport"/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <label>Password:</label>
                                <TextField
                                    type="password"
                                    name="password"
                                    id="password"/>
                            </Grid>
                        </Grid>
                        <PrimButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={styles.submit}>
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