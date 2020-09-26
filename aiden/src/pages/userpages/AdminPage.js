import React, { Component } from "react";
import 'date-fns';
import QrReader from 'react-qr-reader'
import {H2} from '../../component/theme';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Dialog from "@material-ui/core/Dialog";
import { PrimButton} from '../../component/theme';
import axios from 'axios';
import {
    Grid,
    Box,
    Container,
    DialogContent,
    TextField
} from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';

export default class AdminPage extends Component{
    constructor(props){
        super(props)
        this.state={
            totalNumEmp : "",
            userID: localStorage.getItem("userID"),
            totalNumCus : "",
            EmpInfected : [],
            EmpNotified : [],
            result: "",
            searchID: "",
            search: "",
            dialogIsOpen: false,
            dialogIsOpenI: false,
            issue: "",
            selectedDate: new Date('2014-08-18T21:11:54'),
            displaySearch: false,
        }
        this.handleDialogClose = this.handleDialogClose.bind(this);
        this.handleDialogCloseI =  this.handleDialogCloseI.bind(this);
        this.handleDialogOpen = this.handleDialogOpen.bind(this);
        this.handleScan = this.handleScan.bind(this);
        this.handleError = this.handleError.bind(this);
        this.handleListItemClick = this.handleListItemClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleReportSubmit = this.handleReportSubmit.bind(this);
        this.setDate = this.setDate.bind(this);
    }

    handleDialogClose(e){
        this.setState({dialogIsOpen: false});
        this.setState({dialogIsOpenI: true});
    }

    handleDialogCloseI(e){
        this.setState({dialogIsOpenI:false});
    }

    handleDialogOpen(e){
        this.setState({dialogIsOpen: true});
    }

    handleReportSubmit(e){

        const data = {
            type: "RiskNotify",
            workerID: this.state.userID,
            issue: this.state.issue
        };

        axios.post("/user", data).then(res => {
            console.log(res.data);
        }).catch(err =>{
            console.log(err);
        });

        e.preventDefault();
        this.handleDialogCloseI(e);

    }

    handleScan = data => {

        if (data) {
            console.log("data");

            const interactionObj = {
                type: "Interact",
                workerID: this.state.userID,
                customerID: data
            }
            axios.post("/user", interactionObj).then(res =>{
                console.log(res.data);
            }).catch(err =>{
                console.log(err);
            });
        }
    }

    handleError = err => {
        console.error(err)
    }

    handleListItemClick(e){
        this.setState({issue: "STI"});
        this.handleDialogClose(e);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleSearch(e){
        //search this.state.searchID
        if(this.state.searchID==="5"){
            this.setState({result: "Infected"})
        }   
        else if(this.state.searchID==="6"){
            this.setState({result: "Flagged"})
        }
        else{
            this.setState({result: "OK"})
        }
        
        this.setState({displaySearch:true})
    }

    setDate(e, input){
        this.setState({selectedDate : input})
    }

    render(){
        return(
            <Container component="main" maxWidth="xs" style={styles.paper}>
                <H2>QR Scanner:</H2>
                <Container>
                    <div>
                        <QrReader
                        delay={300}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{ width: '100%' }}
                        />
                    </div>
                </Container>
                <PrimButton onClick={this.handleDialogOpen}>
                    Report Issue
                </PrimButton>
                <Dialog onClose={this.handleDialogClose} open={this.state.dialogIsOpen}>
                    <List>
                        <ListItem button onClick={()=>this.handleListItemClick()}>
                            STI
                        </ListItem>
                    </List>
                    <List>
                        <ListItem button onClick={()=>this.handleListItemClick()}>
                            AIDS
                        </ListItem>
                    </List>
                </Dialog>
                <Dialog open={this.state.dialogIsOpenI} onClose={this.handleDialogCloseI}>
                    <DialogContent>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Date picker dialog"
                                    format="MM/dd/yyyy"
                                    value={this.state.selectedDate}
                                    onChange={this.setDate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                        <PrimButton onClick={this.handleReportSubmit} color="primary">
                            Submit Report
                        </PrimButton>
                    </DialogContent>
                </Dialog>
                <TextField name="searchID" onChange={this.handleChange}/>
                <PrimButton onClick={this.handleSearch}>Search ID</PrimButton>
                <div>
                    {((searchVal, result)=>{
                        if(!searchVal) return
                        else return <Box>{result}</Box>
                    })(this.state.displaySearch, this.state.result)}
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
        marginLeft: "50%",
        marginRight: "50%"
    },
    submit:{

    }
}