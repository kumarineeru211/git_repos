import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'


export default function About() {
  return (
    <>
    <header>
      <a href='#'>Logo</a>
      <nav>
        <ul>
          <li>
           <NavLink to='/home'>home</NavLink> </li>
          <li>
          <NavLink to='/login'>Login</NavLink></li>
          <li>
          <NavLink to='/about'>About</NavLink></li>
        </ul>
      </nav>
    </header>
    <section> About page </section>
    </>
  )
}
