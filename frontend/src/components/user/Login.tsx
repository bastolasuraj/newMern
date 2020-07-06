import React, {FC, useState} from "react";
import {RouteComponentProps} from "react-router-dom";
import {UserLogin} from "../../@types/Users";
import {config} from "../../config";
import StorageService from "../../services/Storage";
import {AxiosConfig} from "../../@types";
import {fetchService} from "../../services";
import * as queryString from "querystring";

const Login: FC<RouteComponentProps> = (props: RouteComponentProps) => {
    const initialState: UserLogin = {
        username: "",
        password: "",
        // formData:
    }
    const [formData, setFormData] = useState(initialState);

    const userLogin = async () => {
        const params: AxiosConfig = {
            url: "/login",
            method: "POST",
            data: formData,
        }

        const {data} = await fetchService(params)
        if (data) {
            StorageService.set(config.AUTH_KEY, JSON.stringify(data))
        }
        const query:any = queryString.parse(props.location.search)
        props.history.push(query.redirectUrl)
    }

    return (<div className="container">
            <div className="card login-card sb-card">
                <div className="card-header">
                    Login
                </div>
                <form action="#" className="form">
                    <div className="card-body">
                        <div className="form-group sb-margin">
                            <label htmlFor="username">Username: </label>
                            <input type="text" name="username" placeholder="Username Here" className="form-control"
                                   value={formData.username} onChange={(element) => {
                                setFormData({...formData, username: element.target.value});
                            }}/>
                        </div>
                        <div className="form-group sb-margin">
                            <label htmlFor="password">Password: </label>
                            <input type="password" name="password" placeholder="Password Here" className="form-control"
                                   value={formData.password} onChange={(element) => {
                                setFormData({...formData, password: element.target.value});
                            }}/>
                        </div>
                        <div className="form-group sb-margin float-left">
                            <a type="submit"
                               className="btn"
                               onClick={() => {
                                   props.history.push('/register')
                               }}
                            >Register</a>
                        </div>
                        <div className="form-group sb-margin float-right">
                            <button type="submit" onClick={userLogin} className="btn btn-primary">Login</button>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div className="sb-margin">
                            Username:{formData.username} <br/>
                            Password:{formData.password}
                        </div>
                    </div>

                </form>

            </div>
        </div>)
};
export default Login;