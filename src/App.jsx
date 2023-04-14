import React from 'react';
// import Navigation from './componets/Navigation/Navigation'
// import Qoption from './componets/Questionfolder/Qoption';
// import Practiceapi from './componets/practiceapi/Practiceapi'
// import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import About from './componets/Aboutus/About';
import Home from './componets/Home/Home'
import Login from './componets/login/Login'
// import MouseHover from './componets/mousehover/MouseHover'
// import Greting from './componets/Greetingfolder/Greeting'
// import Rendomnum from './componets/RendomNum/Rndomnum'
// import Fetchdata from './componets/Fetchdata/Fetchdata'
// import Assignment from './componets/Billingform/Assignment'
// import { RecoilRoot } from 'recoil';






function App() {
  

  return (
    <div>
     {/* <Navigation/> */}
     {/* <Qoption/> */}
     {/* <Practiceapi/> */}
     {/* <MouseHover/> */}
     {/* <Greting/> */}
     {/* <Rendomnum/> */}
     {/* <Fetchdata/> */}
     {/* <RecoilRoot>
     <Assignment/>
     </RecoilRoot> */}

     <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  )
}


export default App
