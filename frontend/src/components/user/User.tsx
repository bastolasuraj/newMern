import React, {FC, useEffect, useState} from "react";
import {RouteComponentProps} from "react-router-dom";
import {Users} from "../../@types/Users";
import {config} from "../../config";
import StorageService from "../../services/Storage";
import {AxiosConfig} from "../../@types";
import {fetchService} from "../../services";

const User: FC<RouteComponentProps> = (props: RouteComponentProps) => {
    const [user, setUser] = useState([])
    const auth = StorageService.get(config.AUTH_KEY)
    // console.log(JSON.stringify(auth))
    useEffect(() => {
        const params: AxiosConfig = {
            url: "/users",
            method: "GET",
            // headers: auth,
        }
        // console.log(params.headers)
        fetchService(params).then(({data}) => {
            setUser(data)
            console.log(data)
        }).catch(err => {
            console.log(err)
        })

    }, [])
    return user.length>0 ? (
        <div className='container-fluid'>
            <table className='table table-bordered table-hover'>
                <thead>
                <tr>
                    <th>Username</th>
                    <th>User Type</th>
                    <th>Created</th>
                </tr>
                </thead>
                <tbody>
                {
                    user.map((user: Users, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.username}</td>
                                <td>{user.usertype}</td>
                                <td>{user.createdAt}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    ):(
        <h4>No Registered Users</h4>
    )
}
export default User