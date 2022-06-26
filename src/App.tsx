import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Profile/Navbar";
import Profile from "./Components/Profile/Profile";



function App() {
  return (
    <div className="wrapper">
        <Header/>
       <Navbar/>
       <Profile/>
    </div>
  );
}

export default App;