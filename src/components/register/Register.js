import React from 'react'
import sign from './register.module.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

export default function Register() {

  const navigate = useNavigate()

  return (
    <>
      <Navbar/>
      <div className={sign.outer_container}>
        <div className={sign.main_container}>
          <h1>Register Here </h1>
          <div className={sign.input_field}>
            <input type="text" name="fname" id="" placeholder='First name' />
            <input type="text" name="lname" id="" placeholder='Last name' />
            <input type="email" name="email" id="" placeholder='Email' />
            <input type="password" name="pass" id="" placeholder='Password' />
          </div>
          <button className={sign.loginbtn}>Register</button>
        </div>
      </div>
    </>
  )
}
