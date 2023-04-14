import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Login() {
  return (
    <>
    <header>
      <a href='#'>Logo</a>
      <nav>
        <ul>
          <li>
           <NavLink to='/home'>Home</NavLink> </li>
          <li>
          <NavLink to='/login'>Login</NavLink></li>
          <li>
          <NavLink to='/about'>About</NavLink></li>
        </ul>
      </nav>
    </header>
    <section> login page </section>
    </>
  )
}
