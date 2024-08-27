import React, { useState } from 'react'
import './login.css'
import { assets } from '../../images/assets'


function Login({setShowlogin}){

    const [currentstate,setCurrentstate]=useState('sign up')
  return (
    <div className='login'>
      <form  className="login-container">

        <div className="login-title">
            <h2>{currentstate}</h2>
            <img onClick={()=>{setShowlogin(false)}}src={assets.cross_icon} alt="" />
        </div>

        <div className="login-inputs">
            {currentstate==='log in'?<></>:<input type="text" placeholder='your name' required />}
            
            <input type="email" placeholder='your email' required />
            <input type="password" placeholder='password' required />
        </div>

        <button>{currentstate==='sign up'?"create account":"log in"}</button>

        <div className="login-condition">
            <input type="checkbox" required/>
            <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currentstate==='sign up'
        ?<p>Already have an account?  <span onClick={()=>{setCurrentstate('log in')}}>Login here!</span></p>
        :<p>Create a new account?  <span onClick={()=>{setCurrentstate('sign up')}}>Click here!</span> </p>
        }
        
        
      </form>
    </div>
  )
}

export default Login
