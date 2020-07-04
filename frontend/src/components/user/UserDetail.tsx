import React, {FC} from "react";
import {RouteComponentProps} from "react-router-dom";
type Props = RouteComponentProps<any>
const UserDetail: FC<Props> = (props: Props) => {
    const {history, match:{params:{id}}} = props
    return (
        <div>
            <b>User Detail:{id}</b>
            <br/>
            <button onClick={()=>{
                history.push('/users')
            }}>
                Back to Users
            </button>
        </div>
    )
}
export default UserDetail