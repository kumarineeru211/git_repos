import React from 'react'
import Navbar from './Navbar'
import home from './navbar.module.css'

export default function Home() {
    return (
        <>
            <Navbar />
            <div className={home.center}>
                <p>Welcome to Home page</p>
            </div>
        </>
    )
}
