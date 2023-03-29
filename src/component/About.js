import React from 'react'
import Navbar from './Navbar'
import about from './navbar.module.css'

export default function About() {
    return (
        <>
            <Navbar />
            <div className={about.center}>
                <p>Welcome to About page</p>
            </div>
        </>
    )
}
