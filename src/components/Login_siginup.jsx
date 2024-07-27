import React, { useState } from 'react'
import './loginsiginup/Login_siginup.css'
import email from '../assets/email.png'
import passowrd from '../assets/password.png'
import person from  '../assets/person.png'


const Login_siginup = () => {

  const[action,setaction]=useState("Sign up")
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>
                {action}
            </div>
            <div className='underline'></div>
            </div>
            <div className='inputs'>

            {action==="Login"? <div></div>: <div className='input'>
            <img src={person} alt=''></img>
            <input type='text' placeholder='Name'></input>
            </div>}

            

            <div className='input'>
            <img src={email} alt=''></img>
            <input type='email' placeholder='Email'></input>
            </div>

            <div className='input'>
            <img src={passowrd} alt=''></img>
            <input type='password' placeholder='Password'></input>
            </div>

            <div className='input'>
            <img src={passowrd} alt=''></img>
            <input type='password' placeholder='Confirm Password'></input>
            </div>

      </div>
   
      
      <div className="submit-container">
      <div className={action==="Login"?"submit grey":"submit"} onClick={()=>setaction("Sign up")}>Submit</div>
      <div className={action==="Sign up"?"submit grey":"submit"} onClick={()=>setaction("Login")}>Login</div>
      </div>
      

    </div>
    
  )
}

export default Login_siginup
