import React, {FC, useEffect, useState} from "react";
import {RouteComponentProps} from "react-router-dom";
import axios from "axios";
// import {Container, Table} from "react-bootstrap";

type Props = RouteComponentProps<any>

interface User {
    username: string
    usertype: string
    createdAt: string
}

const User: FC<Props> = (props: Props) => {
    const [user, setUser] = useState([])
    const auth = sessionStorage.getItem('auth')
    useEffect(() => {
        let token
        if (auth) {
            token = JSON.parse(auth).accessToken
            const baseURL = 'http://localhost:5000/api/users'
            axios.get(baseURL,{headers:{'Authorization':`Bearer ${token}`}}).then(({data, status}) => {
                setUser(data.data)
            })
        }
    }, [])
    return  (
        <table className='table table-bordered table-hover' >
            <thead>
            <tr>
                <th>Username</th>
                <th>User Type</th>
                <th>Created</th>
            </tr>
            </thead>
            <tbody>
            {user.map((user:User,index)=>{
                return (
                    <tr key={index}>
                        <td>{user.username}</td>
                        <td>{user.usertype}</td>
                        <td>{user.createdAt}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}
export default User