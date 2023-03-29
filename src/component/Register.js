import React from 'react'
import Navbar from './Navbar'
import regis from './navbar.module.css'

export default function Register() {
    return (
        <>
            <Navbar />
            <div className={regis.center}>
                <p>Welcome to Register page</p>
            </div>
        </>
    )
}
