import React, {Component} from "react";
import CompanySignup from "../component/CompanySignup";
import UserSignup from "../component/UserSignup";
import {
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel
} from '@material-ui/core';

export default class SignUpPage extends Component{
    constructor(props){
        super(props);
        this.state={
            value : ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

    };

    handleRadioChange(e){
        this.setState({value :e.target.value});
    };
    
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} style={styles.form}>
                    <FormControl component="fieldset" style={styles.formControl}>
                        <FormLabel component="legend" style={styles.formLabel}> Signup As:</FormLabel>
                        <RadioGroup row name="userType" onChange={this.handleRadioChange} style={styles.container}>
                            <FormControlLabel
                            style={styles.formControl}
                            value="Company"
                            control={<Radio color="primary" />}
                            label="Company"
                            labelPlacement="end"
                            />
                            <FormControlLabel
                            style={styles.formControl}
                            value="User"
                            control={<Radio color="primary" />}
                            label="User"
                            labelPlacement="end"
                            />
                        </RadioGroup>
                    </FormControl>
                </form>
                <div>
                    {((value) => {
                        if (value === "Company") return <CompanySignup/>
                        else return <UserSignup/>
                    })(this.state.value)}
                </div>
            </div>
        )
    }
}

const styles={
    formControl: {
      minWidth: 200,
      display: 'flex',
      justifyContent: 'center',
    },
    form: {
      width: '100%',
      marginTop: 8*3
    },
    formLabel: {
    marginBottom: 8,
      fontWeight:'bold',
      textAlign: 'center',
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '1vw',
    }
}