import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateUserData } from '../redux/user/UserActions'

const UserUpdateProfileForm = (props) => {
    const [userData, setUserData] = useState({
        firstName:'',
        lastName:''
    })

    const [error, setError] = useState()

    const handleChange = e => {
        setUserData( prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit =  (e)=>{
        e.preventDefault()
        
        if(userData.firstName === '' || userData.lastName === ''){
             setError("The firstname and lastname are required")
             return
        } 
       
        props.updateUserData(props.token,userData)
        props.handleSetEditMode(false)
       
    } 
    return (
        <div>
            {error && <p >{error}</p> }
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <input type="text" name="firstName" id="firstName" placeholder={props.currentFirstName} onChange={handleChange}/>
                    <input type="text" name="lastName" id="lastName" placeholder={props.currentLastName} onChange={handleChange}/>
                </div>
                <div className="form-row">
                    <button>Save</button>
                    <button onClick={() => props.handleSetEditMode(false)}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        token: state.AuthReducer.token,
        user: state.UserReducer.user
    }
}
export default connect(mapStateToProps, {updateUserData})(UserUpdateProfileForm) 
