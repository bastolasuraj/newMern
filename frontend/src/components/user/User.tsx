import React, {FC, useEffect, useState} from "react";
import {RouteComponentProps} from "react-router-dom";
import {Users} from "../../@types/Users";
import {config} from "../../config";
import StorageService from "../../services/Storage";
import {AxiosConfig} from "../../@types";
import {fetchService} from "../../services";

type Props = RouteComponentProps<any>

const User: FC<Props> = (props: Props) => {
    const [user, setUser] = useState([])
    const auth = StorageService.get(config.AUTH_KEY)
    useEffect(() => {
        const params:AxiosConfig ={
            url:"/users",
            method:"GET"
        }
        fetchService(params).then(({data})=>{
            setUser(data)
        }).catch(error=>{
            console.log(error)
        })

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
            {user.map((user:Users, index)=>{
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