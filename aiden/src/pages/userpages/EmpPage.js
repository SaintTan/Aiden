import React, { Component } from "react";
import {H2} from '../../component/theme';
import QRCode from "react-qr-code";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Dialog from "@material-ui/core/Dialog";
import { PrimButton} from '../../component/theme';
import axios from 'axios';
import {
    Box,
    Container,
    DialogContent,
    Grid
} from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';

export default class EmpPage extends Component{
    constructor(props){
        super(props)
        this.state={
            userID: localStorage.getItem("userID"),
            dialogIsOpen: false,
            dialogIsOpenI: true,
            issue: "",
            searchID: "",
            search: "",
            selectedDate: new Date('2014-08-18T21:11:54'),
            displaySearch: false
        }
        this.handleDialogClose = this.handleDialogClose.bind(this)
        this.handleDialogOpen = this.handleDialogOpen.bind(this)
        this.handleListItemClick = this.handleListItemClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
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

    handleListItemClick(e){
        this.setState({issue: e.target.key});
        this.handleDialogClose(e);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleSearch(e){
        //search this.state.searchID
        this.setState({result: "OK"})
        this.setState({displaySearch:true})
    }
    setDate(e, input){
        this.setState({selectedDate : input})
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

    render(){
        return(
            <Container component="main" maxWidth="xs" style={styles.paper}>
                <H2>
                    Your QR Code:
                </H2>
                <QRCode value={this.state.userID}/>
                <Box style={{height:40}}/>
                <PrimButton onClick={this.handleDialogOpen}>
                    Report Issue
                </PrimButton>
                <Dialog onClose={this.handleDialogClose} open={this.state.dialogIsOpen}>
                    <List>
                        <ListItem button onClick={this.handleListItemClick} key="STI">
                            STI
                        </ListItem>
                        <ListItem button onClick={this.handleListItemClick} key="STI">
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