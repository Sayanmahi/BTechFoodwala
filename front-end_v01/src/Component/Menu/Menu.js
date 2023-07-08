import MenuSummary from "./MenuSummary";

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import {Fragment} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

const Menu=() =>{
    const navigate=useNavigate();
    function menus1()
    {
        navigate('/simplemenus');
    }
    function myorder()
    {
      navigate('/jmyorder');
    }
    function rr3(){
        localStorage.removeItem('usertoken');
        navigate("/");
     }
     function rr2(){
        navigate('/simple');
     }
    return(
        <>

        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home" >BTech Foodwala</Navbar.Brand> 
             <Nav className="container-fluid">
           
            
            <Nav className="ms-auto">
            <Nav.Link href="#menus" onClick={menus1}>Menus</Nav.Link>  
            <Nav.Link href="#my orders" onClick={myorder}>My Orders</Nav.Link>   
            <Nav.Link href="#prev orders" onClick={rr2}>Previous Orders</Nav.Link>  
            <Nav.Link onClick={rr3}>LOGOUT</Nav.Link>  
            </Nav> 
            </Nav>
            </Container>
        </Navbar>
        <MenuSummary />
    
        </>
    );
};

export default Menu;