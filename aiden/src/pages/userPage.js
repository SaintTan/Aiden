import React, {Component} from "react";
import AdminPage from "./userpages/AdminPage"
import EmpPage from "./userpages/EmpPage"

export default class userPage extends Component{
    constructor(props){
        super(props)
        this.state={
            userType: ""
        }
    }
    render(){
        return(
            <div>
                {((type)=>{
                    if (type === "admin") return <AdminPage/>
                    else return <EmpPage/>
                })(this.state.userType)}
            </div>
        )
    }
}