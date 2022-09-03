import React, { Component } from 'react'

export class Signin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
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

    }

    handleSubmit(e) {
        e.preventDefault()

    }

    render() {
        console.log(this.state)
        return (
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" onChange={this.handleChange} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" onChange={this.handleChange} autoComplete="off" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                        </div>

                        {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}

                        <button className="sign-in-button">Sign In</button>

                    </form>
                </section>
            </main>
        )
    }
}

export default Signin
