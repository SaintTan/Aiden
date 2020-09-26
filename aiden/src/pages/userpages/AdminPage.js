import React, { Component } from "react";
import QrReader from 'react-qr-reader'
import {H2} from '../../component/theme';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Dialog from "@material-ui/core/Dialog";
import { PrimButton} from '../../component/theme';
import {
    Box,
    Container,
    TextField
} from "@material-ui/core";

export default class AdminPage extends Component{
    constructor(props){
        super(props)
        this.state={
            totalNumEmp : "",
            totalNumCus : "",
            EmpInfected : [],
            EmpNotified : [],
            result: "",
            searchID: "",
            search: "",
            dialogIsOpen: false,
            issue: "",
            displaySearch: false
        }
        this.handleDialogClose = this.handleDialogClose.bind(this);
        this.handleDialogOpen = this.handleDialogOpen.bind(this);
        this.handleScan = this.handleScan.bind(this);
        this.handleError = this.handleError.bind(this);
        this.handleListItemClick = this.handleListItemClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleDialogClose(e){
        this.setState({dialogIsOpen: false});
    }

    handleDialogOpen(e){
        this.setState({dialogIsOpen: true});
    }

    handleScan = data => {
        if (data) {
          this.setState({
            result: data
          })
        }
    }

    handleError = err => {
        console.error(err)
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
                        <ListItem button onClick={this.handleListItemClick} key="STI">
                            STI
                        </ListItem>
                    </List>
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
        margin: "4px 0px 4px",
    },
    submit:{

    }
}