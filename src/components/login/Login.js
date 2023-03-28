import React from 'react'
import log from './login.module.css'
import Navbar from '../navbar/Navbar'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <div className={log.outer_container}>
        <div className={log.main_container}>
          <h1>Welcome !</h1>
          <p className={log.grey}>Log in your Account</p>
          <div className={log.input_field}>
            <input type="email" name="email" id="" placeholder='Email' />
            <input type="password" name="pass" id="" placeholder='Password' />
          </div>

          <div className={log.remember}>
            <div className={log.checkme}>
              <label htmlFor=""><input type="checkbox" name="tick" id="" />Remember Me</label>
            </div>
            <a className={log.grey} href="/">Forget Password?</a>
          </div>

          <button className={log.loginbtn}>Login</button>
          
          <div className={log.signup}>
            <p className={log.grey}> Don't have any Account? <span onClick={()=>navigate("/register")}>Sign Up</span></p>
          </div>
        </div>
      </div>
    </>
  )
}
