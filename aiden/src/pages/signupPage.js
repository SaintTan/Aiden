import React, {Component} from "react";
import CompanySignup from "../component/CompanySignup";
import UserSignup from "../component/UserSignup";
import {
    Container,
    Menu,
    MenuItem
} from '@material-ui/core';

export default class SignUpPage extends Component{
    constructor(props){
        super(props);
        this.state={
            companyType : "company"
        }
    }
    render(){
        return(
            <Container>
                <Menu>
                    <MenuItem>
                        Company
                    </MenuItem>
                    <MenuItem>
                        New User
                    </MenuItem>
                </Menu>
                <div>
                    {((companyType) => {
                        if (companyType === "company") return <CompanySignup/>
                        else return <UserSignup/>
                    })(this.state.companyType)}
                </div>
            </Container>
        )
    }
}