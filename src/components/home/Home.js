import React from 'react'
import Navbar from '../navbar/Navbar'
import homeStyle from './home.module.css'

export default function Home() {

    const cardData = [
        {
            img: 'https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcwh-full-next-space.fra1.digitaloceanspaces.com%2Fvideoseries%2Fpython-100-days-of-code-1%2F7wnove7K-ZQ-HD.jpg&w=384&q=75',
            heading: 'Python Tutorials - 100 Days of Code',
            detail: "Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!"
        },
        {
            img: 'https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcwh-full-next-space.fra1.digitaloceanspaces.com%2Fvideoseries%2Fultimate-js-tutorial-hindi-1%2FJS-Thumb.jpg&w=384&q=75',
            heading: 'Ultimate JavaScript Course',
            detail: "This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS for completely free. What are you waiting for? Just Enroll Buddy",
        },
        {
            img: 'https://www.codewithharry.com/_next/image/?url=https%3A%2F%2Fcodewithharry.nyc3.cdn.digitaloceanspaces.com%2Fassets%2F090fefe24d23d47584f6ddc7eb5a241e.png&w=384&q=75',
            heading: 'React JS Tutorials For Beginners',
            detail: "React is a free and open-source front-end JavaScript library. This series will cover React from starting to the end. We will learn react from the ground up!",
        },
    ]

    return (
        <>
            <Navbar />

            <div className={homeStyle.mainHome}>
                <section className={homeStyle.introSection}>
                    <div className={homeStyle.contentPart}>
                        <h1>Welcome to <span>CodeWithHarry</span></h1>
                        <h2>Learn <span>Coding</span></h2>
                        <p>Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.</p>
                        <div>
                            <button className={homeStyle.btn1}>Free Course</button>
                            <button className={homeStyle.btn2}>Explore Blog</button>
                        </div>
                    </div>
                    <div className={homeStyle.imgPart}>
                        <img src="https://cdn.pixabay.com/photo/2015/05/31/10/51/acer-791027__340.jpg" alt="" />
                    </div>
                </section>

                <section className={homeStyle.courseSection}>
                    <h1>Recommended Courses</h1>

                    <div className={homeStyle.cardContainer}>
                        {
                            cardData.map((elem) => {
                                return (
                                    <>
                                        <Card img={elem.img} heading={elem.heading} details={elem.detail} />
                                    </>
                                )
                            })
                        }
                    </div>

                </section>

                <section className={homeStyle.testiSection}>
                    <h1>Testimonials</h1>
                    <div className={homeStyle.testiDiv}>
                        <div>
                            <p>I don't have words to thank this man, I'm really grateful to have this channel and website in my daily routine. If you're a mere beginner, then you can trust this guy and can put your time into his content. I can assure you that it'll be worth it.</p>
                            <h3>Mohit Kumar</h3>
                            <span>Web Developer</span>
                        </div>
                        <div>
                            <p>For everyone who wants to level up their #Coding and #Dev skills - seriously, this channel is for you! Both basic and advanced stacks are covered on this channel, and one can learn according to his skill levels. And the icing on the cake is, everything is available for free.</p>
                            <h3>Rakesh Shetty</h3>
                            <span>Web Developer</span>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}


function Card(props) {
    return (
        <div className={homeStyle.cardMain}>
            <img src={props.img} alt="" />
            <div>
                <p>FREE COURSE</p>
                <h3>{props.heading}</h3>
                <p>{props.details}</p>
            </div>
            <button>Start Watching</button>
        </div>
    )
}
