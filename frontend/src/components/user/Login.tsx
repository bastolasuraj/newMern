import React, {FC, useState} from "react";
import {RouteComponentProps} from "react-router-dom";
import axios from "axios";

// import {url} from "inspector";

interface UserLogin {
    username: string
    password: string
    // formData:UserLogin
}

const Login: FC<RouteComponentProps> = (props: RouteComponentProps) => {
    const initialState: UserLogin = {
        username: "",
        password: "",
        // formData:
    }
    const [formData, setFormData] = useState(initialState);
    const userLogin = async () => {
        console.log("formData==", formData)
        const baseURL = 'http://localhost:5000/api/login'
        const {data, status} = await axios.post(baseURL, formData)
        if (status) {
            sessionStorage.setItem('auth', JSON.stringify(data))
            //     sessionStorage:setI
        }
        window.location.href = '/'
        // const response = await axios.get("http://localhost:5000/api/users", {
        //     headers:{
        //         'authorization':`Bearer ${data.accessToken}`
        //     }
        // })
        // console.log("res=",response.data)
    }
    return (
        <div className="container">
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
        </div>
    )
};
export default Login;