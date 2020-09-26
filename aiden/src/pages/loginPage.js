import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import { PrimButton, TextLink, H2 } from '../component/theme';
import axios from 'axios';
import {
    TextField,
    Grid,
    Container,
    CssBaseline,
    Avatar
} from "@material-ui/core";

export default class LoginPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            err_msg: ''
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
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post("/login", data).then(res => {
            console.log(res.data);
            if (res.data["status"] === "declined"){
                this.setState({err_msg: "Wrong password or email!"});
            }
            
            else if (res.data["status"] === "verified"){
                if (res.data["type"] === "worker"){
                    localStorage.setItem("usertype", "admin");
                    localStorage.setItem("userID", res.data["id"]);
                }
                else if (res.data["type"] === "customer"){
                    localStorage.setItem("usertype", "user");
                    localStorage.setItem("userID", res.data["id"]);
                }
                localStorage.setItem("loggedIn", true);
                this.setState({redirect: "user"})
            }

        }).catch(err => {
            console.log(err);
        });

        e.preventDefault();
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
                <Container component="main" maxWidth="xs" style={styles.container}>
                    <Avatar style={styles.avatar}>
                        <UserOutlined />
                    </Avatar>
                    <H2 component="h1" variant="h5">
                        Sign in
                    </H2>
                    <CssBaseline />
                    <div style={styles.paper}>
                        <div style={styles.message}>{this.state.err_msg}</div>
                        <form onSubmit = {this.handleSubmit} style={styles.formLayout}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField 
                                        name="email" 
                                        type="email" 
                                        value={this.state.email} 
                                        id="email"
                                        label="email"
                                        style={styles.textField}
                                        onChange={this.handleChange}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    name="password" 
                                    type="password" 
                                    value={this.state.password}
                                    id="password" 
                                    label="password"  
                                    style={styles.textField}
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
    container:{
        marginTop: 8*15,
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
        flexDirectop:"column",
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
    submit:{},
    message:{
        color: "red",
        fontSize: 15
    }
}