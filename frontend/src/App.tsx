import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Header from "./components/layouts/Header";
import Dashboard from "./components/dashboard/index";
// import Cards from "./components/dashboard/Cards";
import Login from "./components/user/Login";
// import Users from "./components/user/Users";
import PageNotFound from "./components/PageNotFound";
import UserRoutes from "./components/user/UserRoutes";
import Registration from "./components/user/Registration";

interface Auth {
    username: string
    role: string
}

function App() {
    const initialState: Auth = {
        username: "",
        role: ""
    }
    const [auth, setAuth] = useState(initialState)
    useEffect(() => {
        let getAuthFromSession = sessionStorage.getItem('auth');
        if (getAuthFromSession) {
            const userAuth: Auth = JSON.parse(getAuthFromSession.toString())
            setAuth({
                username: userAuth ? userAuth.username : '',
                role: ''
            })
        }
    }, [])
    return (
        <div>
            <BrowserRouter>
                {auth.username &&
                <>
                    <Route path='/' render={props => <Header username={auth.username} {...props} />}/>
                    <Switch>
                        <Route path='/' render={props => <Dashboard {...props}/>} exact/>
                        <Route path='/users' component={UserRoutes}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </>
                }
                {auth.username === '' &&
                <>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Registration}/>
                    </>
                }

            </BrowserRouter>

        </div>
    );
}

export default App;
