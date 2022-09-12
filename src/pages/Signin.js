import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { login } from "../redux/auth/AuthActions";
import { setUserData } from "../redux/user/UserActions";

export class Signin extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            username: '',
            password: '',
            errors: [],
            rememberMe: false
        }
        this.errors = []
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
        if (e.target.name === "rememberMe") {
            this.setState(prevState => {
                return {
                    ...prevState,
                    [e.target.name]: e.target.checked
                }
            })
        }
    }

    async handleSubmit(e) {
        e.preventDefault()
        this.errors = []
        
        // check for errors
        if (this.state.username === '') this.errors.push({ errorText: "L'email est requis" })
        if (this.state.password === '') this.errors.push({ errorText: "Le mot de passe est requis" })
        this.checkForErrors()

        const user = {
            email: this.state.username,
            password: this.state.password
        }

        await this.props.login(user)
        if(!this.props.authToken){
            this.errors.push({errorText: "authentication failed"})
            this.checkForErrors()
        }
        if(this.props.authToken){
            await this.props.setUserData(this.props.authToken)
        } 
    }
    
    checkForErrors() {
        if (this.errors.length > 0) {
            this.setState(prevState => {
                return {
                    ...prevState,
                    errors: [...this.errors]
                }
            })
            return
        }
        this.setState(prevState => {
            return {
                ...prevState,
                errors: []
            }
        })
    }

    render() {
        if (this.props.isAuthenticated === true) return <Navigate replace to="/profile" />
        return (
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div id="sign-in-error-container">
                            {
                                this.state.errors.length > 0
                                && this.state.errors.map((error, index) => {
                                    return <p key={index}>{error.errorText}</p>
                                })
                            }
                        </div>

                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" onChange={this.handleChange} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" onChange={this.handleChange} autoComplete="off" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" name="rememberMe" onChange={this.handleChange} /><label htmlFor="remember-me">Remember me</label>
                        </div>

                        {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}

                        <button className="sign-in-button">Sign In</button>

                    </form>
                </section>
            </main>
        )
    }
}

const mapStateToProps = state => {
    return {
        authToken: state.AuthReducer.token,
        isLoading: state.AuthReducer.isLoading,
        isAuthenticated: state.AuthReducer.isAuthenticated
    }
}
export default connect(mapStateToProps, { login, setUserData })(Signin) 
