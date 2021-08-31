import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="Amazon Logo" />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form action="#">
                    <h5>E-mail</h5>
                    <input type='text'/>
                    <h5>Password</h5>
                    <input type='password'/>
                    <button className='login_signInButton'>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
                </p>
                <button className='login_registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
