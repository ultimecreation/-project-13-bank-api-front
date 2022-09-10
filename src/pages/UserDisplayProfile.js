import React, { useState } from 'react'
import { connect } from 'react-redux'
import UserUpdateProfileForm from '../components/UserUpdateProfileForm'

const UserDisplayProfile =  ({user}) => {
    const [editMode, setEditMode] = useState(false)
   
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />
                    {!editMode && user && `${user?.firstName} ${user?.lastName}!`}
                </h1>
                {!editMode 
                    ? <button className="edit-button" onClick={()=>setEditMode(!editMode)}>Edit Name</button>
                    : <UserUpdateProfileForm currentFirstName={user.firstName} currentLastName={user.lastName} handleSetEditMode={setEditMode}/>
                }
               
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    )
}
const mapStateToProps =  state => {
    return {
        user:  state.UserReducer.user
    }
   
}
export default connect(mapStateToProps)(UserDisplayProfile) 
