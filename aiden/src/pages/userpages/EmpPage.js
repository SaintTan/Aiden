import React, { Component } from "react";
import {H2} from '../../component/theme';
import QRCode from "react-qr-code";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Dialog from "@material-ui/core/Dialog";
import { PrimButton} from '../../component/theme';
import {
    Box,
    Container,
    TextField
} from "@material-ui/core";

export default class EmpPage extends Component{
    constructor(props){
        super(props)
        this.state={
            userID: localStorage.getItem("userID"),
            dialogIsOpen: false,
            issue: "",
            searchID: "",
            search: "",
            displaySearch: false
        }
        this.handleDialogClose = this.handleDialogClose.bind(this)
        this.handleDialogOpen = this.handleDialogOpen.bind(this)
        this.handleListItemClick = this.handleListItemClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }
    handleDialogClose(e){
        this.setState({dialogIsOpen: false});
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
                    </List>
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