import React, {FC, useState} from "react";
import {RouteComponentProps} from "react-router-dom";
import {UserRegistration} from "../../@types/Users";
import {config} from "../../config";
import StorageService from "../../services/Storage";
import {fetchService} from "../../services";
import {AxiosConfig} from "../../@types";

const Registration: FC<RouteComponentProps> = (props:RouteComponentProps) => {
    const initialState: UserRegistration = {
        // firstname: "",
        // lastname: "",
        // email: "",
        username: "",
        password: "",
        usertype: "",
        // image: ""
    }
    const [formData, setFormData] = useState(initialState);
    const [message, setMessage] = useState('');
    const userLogin = async () => {
        console.log("formData==", formData)
        const params:AxiosConfig={
            url:'/registration',
            method:"POST",
            data:formData,
        }
        const {data} = await fetchService(params)
        if(data){
            setMessage("Users Registration Successful")
        }
        if (data) {
            StorageService.set(config.AUTH_KEY, JSON.stringify(data))
        }
        window.location.href = '/'
    }
    return (
        <div className="container">
            <div className="card login-card sb-card">
                <div className="card-header">
                    User Registration Form
                </div>
                {message !=='' &&
                <div className='alert alert-success'>{message}</div>
                }
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

                        <div className="form-group sb-margin">
                            <label htmlFor="usertype">User Type: </label>
                            <select name='usertype' className='form-control' onChange={(element) => {
                                setFormData({...formData, usertype: element.target.value});
                            }}>
                                {['Customer', 'Business'].map((usertype, index) => {
                                    return <option key={index} value={usertype}>{usertype}</option>
                                })}
                            </select>
                        </div>
                        <a className="form-group sb-margin float-left">
                            <a type="submit"
                               className="btn"
                               onClick={() => {
                                   props.history.push('/login')
                               }}
                            >Login</a>
                        </a>
                        <div className="form-group sb-margin float-right">
                            <button type="submit" onClick={userLogin} className="btn btn-primary">Register User</button>
                        </div>

                    </div>

                </form>

            </div>
        </div>
    )
};
export default Registration;

//
// <div className="form-group sb-margin">
//     <label htmlFor="firstname">First Name: </label>
//     <input type="text" name="firstname" placeholder="First Name Here" className="form-control"
//            value={formData.firstname} onChange={(element) => {
//         setFormData({...formData, firstname: element.target.value});
//     }}/>
// </div>
// <div className="form-group sb-margin">
//     <label htmlFor="lastname">Last Name: </label>
//     <input type="text" name="lastname" placeholder="Last Name Here" className="form-control"
//            value={formData.lastname} onChange={(element) => {
//         setFormData({...formData, lastname: element.target.value});
//     }}/>
// </div>
// <div className="form-group sb-margin">
//     <label htmlFor="email">E-Mail: </label>
//     <input type="text" name="email" placeholder="E-Mail Here" className="form-control"
//            value={formData.email} onChange={(element) => {
//         setFormData({...formData, email: element.target.value});
//     }}/>
// </div>
//