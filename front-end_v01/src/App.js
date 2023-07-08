// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Login from './Component/Login.js';
import Registration from './Component/Registration.mjs';
import Adminlogin from './Component/Adminlogin';
import Home from './Component/Home';
import { Route,Routes } from 'react-router-dom';
import Menu from './Component/Menu/Menu';



import AddItemadmin from './Component/AddItemadmin';
import Adminhome from './Component/Adminhome';
import Simplemenu from './Component/Menu/Simplemenus';
import Simpleorder from './Component/Myorder/Simpleorder';
import Simpleadmin from './Component/Adminworks/Simpleadmin';
import Simple from './Component/Myorderdeliver/Simple';
function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<Home/>} />
      <Route path="/adminlogin" element={<Adminlogin/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Registration/>} /> 
      <Route path="/menu" element={<Menu />} />
  
      <Route path="/jmyorder" element={<Simpleorder />} />
      <Route path="/adminhome" element={<Adminhome />} />
      <Route path="/adminlogin" element={<Adminlogin />} />
      <Route path="/additemadmin" element={<AddItemadmin />} />
      
      <Route path="/simplemenus" element={<Simplemenu />} />
      <Route path="/simpleorder" element={<Simpleorder />} />
      <Route path="/simpleadmin" element={<Simpleadmin />} />
      <Route path="/simple" element={<Simple />} />

      


    </Routes>

    </>
  );
}

export default App;
