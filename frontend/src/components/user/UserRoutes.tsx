import React from "react";
import {Route, Switch} from "react-router-dom";
import User from "./User";
import UserDetail from "./UserDetail";
import CreateUser from "./CreateUser";

const UserRoutes = () => {
    return (
        <Switch>
            <Route path='/users' render={props => <User {...props}/>} exact/>
            <Route path='/users/:id/detail' render={props => <UserDetail {...props}/>} exact/>
            <Route path='/users/add' component={CreateUser} exact/>
        </Switch>
    )
}
export default UserRoutes