import React, {FC} from "react"
import {RouteComponentProps} from "react-router-dom"
import {Container, NavLink} from "react-bootstrap";

interface Props extends RouteComponentProps {
    username: string
}

const Header: FC<Props> = (props: Props) => {
    const {history} = props
    return (
        <nav className="navbar navbar-expand-lg navbar-light sb-navbar-color bg-light">
            <Container>
                <a className="navbar-brand" href="/">Sbastola.com</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className='nav-link' href='/'>Dashboard</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className='nav-link' href='/users'>Users</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className='nav-link' href='/users/add'>Create user</NavLink>
                        </li>

                    </ul>
                    <a href="#" className='btn btn-danger' onClick={() => {
                        sessionStorage.removeItem('auth')
                        history.push('/login')
                        window.location.reload()
                    }}>Logout</a>
                </div>
            </Container>
        </nav>
    )
}
export default Header