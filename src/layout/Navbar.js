import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = ({isAuthenticated}) => {
    return (
        <div>
            <nav className="main-nav">
                <Link to="/" className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={`${process.env.PUBLIC_URL}/img/argentBankLogo.png`}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>

                <div>
                    <Link className="main-nav-item" to="/profile">
                        <i className="fa fa-user-circle"></i>
                        Profile
                    </Link>
                    {
                        isAuthenticated 
                        ? <Link className="main-nav-item" to="/logout">
                        <i className="fa fa-user-circle"></i>
                        Logout
                    </Link>
                        : <Link className="main-nav-item" to="/sign-in">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                    }
                </div>
            </nav>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.AuthReducer.isAuthenticated
    }
}
export default connect(mapStateToProps)(Navbar) 
