import React from 'react'
import Navbar from '../navbar/Navbar'
import aboutStyle from './about.module.css'

export default function About() {
    return (
        <>
            <Navbar />
            <div className={aboutStyle.aboutMain}>
                <section className={aboutStyle.aboutBanner}>
                    <h1>About</h1>
                </section>

                <section className={aboutStyle.aboutDetail}>
                    <div className={aboutStyle.aboutDetailContent}>
                        <h1>Haris Ali Khan (Harry)</h1>
                        <p>Code with Harry is also a programmer, web developer educator and creator of YouTube pay videos best of all, Code with Harry hails from Rampur in Uttar Pradesh, India. </p>

                        <p>Code With Harry has also completed his school and college studies at Rampur. Code with Harry graduated in B. Tech and M. Tech also IIT Kharagpur. </p>

                        <p>Code With Harry has also done internships in many companies. Code With Harry has also done internships in many cities like London, Taiwan, and Hong Kong . Code With Harry also has a YouTube channel where he teaches programming and related skills to people.</p>
                    </div>
                    <div className={aboutStyle.aboutDetailImg}>
                        <img src="https://www.vetbossel.in/wp-content/uploads/2022/12/code-with-harry.jpg" alt="" />
                    </div>
                </section>

                <section className={aboutStyle.aboutHistory}>
                    <div className={aboutStyle.aboutHistoryImg}>
                        <img src="https://i0.wp.com/wikipura.com/wp-content/uploads/2022/06/codewithharry_246925444_4253127654815626_1226385479236047611_n.webp?w=1080&ssl=1" alt="" />
                    </div>
                    <div className={aboutStyle.aboutHistoryContent}>
                        <h1>History</h1>

                        <p>Code With Harry is born into a normal family in Uttar Pradesh. Since childhood, Code With Harry has been focusing on computers and technology related to computers, how computers and technology work, and Code With Harry is very interested in learning about computers. Therefore, Code With Harry made his passion for programming his profession and also completed his further studies in his field. </p>

                        <p>In this, his family also supported Harry and always keep him. Code With Harry completed his schooling in his village Uttar Pradesh, Rampur. Code With Harry has completed his B Tech and M Tech graduate from IIT Kharagpur.</p>

                        <p>Code With Harry is today a successful software engineer and web developer, as well as doing many company and freelancing tasks. Code With Harry also has a YouTube channel where he informs people about programming. And make many courses available to people for free. </p>
                    </div>
                </section>
            </div>
        </>
    )
}
