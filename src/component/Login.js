import React from 'react'
import Navbar from './Navbar'
import log from './navbar.module.css'

export default function Login() {
    return (
        <>
            <Navbar />
            <div className={log.center}>
                <p>Welcome to Login page</p>
            </div>
        </>
    )
}
