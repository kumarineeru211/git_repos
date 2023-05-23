import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

    const navstyles = ({isActive})=>{
       return {
        fontWeight : isActive? "bold" : 'normal',
         
         
         textDecoration : isActive ? "none": 'underline'
       }
    }
    
  return (
    
    <nav >
        <NavLink  style={navstyles }  to='/' > Home</NavLink>
        <NavLink style={navstyles }  to='/contact' >Contact</NavLink>
        <NavLink  style={navstyles } to='/task' >Task</NavLink>
    </nav>
  )
}

export default Navbar