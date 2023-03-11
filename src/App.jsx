import React from 'react';
import Card from './Card';
import Count from './Count'



 export default function App() {
  const user1 = {
    name: 'Amit',
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
    designation: 'Graphic Designer',
    description: 'Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design.',
  };

  const user2 = {
    name: 'Ruhi',
    image: 'https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=126&h=75&dpr=2',
    designation: 'Singer',
    description: 'Perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays, and other types of music groups.',
  };

 
  return (
    <div>
      <Count/>
      {/* <Card user={user1}  /> */}
      {/* <Card user={user2} /> */}
    </div>
  );
}


