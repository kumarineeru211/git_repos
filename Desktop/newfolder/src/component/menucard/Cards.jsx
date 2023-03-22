import React from 'react'
import styles from './card.module.css'
import firstimg from './firstimg.jpeg'

export default function Cards() {
  return (
  <>
    <div className={styles.container}>
    <div className={styles.header}>
    <h1>Know your mentors</h1>
     <p>A mentor is a person who can support, advise and guide you. They typically take the time to get to know you and the challenges.
     </p>
    </div>
    

     <div className={styles.maindiv}>
     
    
     <div className={styles.carddiv}>
     
     <img src={firstimg} alt='firstimg'/>

     <h1>Lewis Alexader</h1>
      <p>Product manager @google India</p>
      <p className={styles.exp}>4Yrs Exp.</p>
      
      </div>
      {/* 2second */}

      <div className={styles.carddiv}>
     
     <img src={firstimg} alt='firstimg'/>

     <h1>Lewis Alexader</h1>
      <p>Product manager @google India</p>
      <p className={styles.exp}>4Yrs Exp.</p>
      
      </div>

      {/* 3 card */}
      <div className={styles.carddiv}>
     
     <img src={firstimg} alt='firstimg'/>

     <h1>Lewis Alexader</h1>
      <p>Product manager @google India</p>
      <p className={styles.exp}>4Yrs Exp.</p>
      
      </div>

      {/* 4 card */}

      <div className={styles.carddiv}>
     
     <img src={firstimg} alt='firstimg'/>

     <h1>Lewis Alexader</h1>
      <p>Product manager @google India</p>
      <p className={styles.exp}>4Yrs Exp.</p>
      
      </div>

      {/* 5... */}
      <div className={styles.carddiv}>
     
     <img src={firstimg} alt='firstimg'/>

     <h1>Lewis Alexader</h1>
      <p>Product manager @google India</p>
      <p className={styles.exp}>4Yrs Exp.</p>
      
      </div>

      {/* 6... */}

      <div className={styles.carddiv}>
     
     <img src={firstimg} alt='firstimg'/>

     <h1>Lewis Alexader</h1>
      <p>Product manager @google India</p>
      <p className={styles.exp}>4Yrs Exp.</p>
      
      </div>
     

   </div>
     </div>
    
   </>
    
  )
}
