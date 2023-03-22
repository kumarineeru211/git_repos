import React from "react";
import Content from "./component/Content";
import Header from "./component/Header";
import Cards from './component/menucard/Cards'
import Tictactoe from './component/gamefolder/Tictactoe'



function App() {
  return (
    <>
    <Header 
    home="Home"
    services="Service"
    contact="Contact"
    about="About Us"
    btn1="Log In"
    btn2="Sign Up"
    />
    {/* <Content/> */}
    <Cards/>
    <Tictactoe/>
     
    </>  
  );
}

export default App;
