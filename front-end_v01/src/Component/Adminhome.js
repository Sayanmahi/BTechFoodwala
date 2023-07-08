import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';

import axios from 'axios';
import { useEffect,useState } from "react"
export default function Home() {

    const navigate=useNavigate();
    const location=useLocation();
    console.log(location.state);
    const [List,setList]=useState([]);
    function rr() 
    {
        // console.log("jjjjjjjjjjjjjjjjjjjjjj        "+location.state.tok);
        navigate('/additemadmin');
    }

    function usl()
    {
        navigate('/simpleadmin');

    }

    function adl()
    {
        //navigate('/adminlogin');
    }
    
    function hh()
    {
        navigate('/');
    }
    function rr3()
    {
        localStorage.removeItem('admintoken');
        navigate('/');
    }


return (
<>
<div>
<Navbar bg="dark" variant="dark">
<Container>
<Navbar.Brand href="#Home" onClick={hh}>BTech Foodwala</Navbar.Brand>
<Nav className="ms-auto">
{/* <Nav.Link href="#Menu" onClick={mm}>Menu</Nav.Link>  */}
<Nav.Link href="#Login" onClick={rr}>Add Item</Nav.Link>
<Nav.Link href="#Userlogin" onClick={usl}>Not Delivered</Nav.Link>
<Nav.Link  onClick={rr3}>LOGOUT</Nav.Link>


</Nav> 
</Container>
</Navbar>
{/* <div className="CoverImg"></div> */}
</div>
</>
 );

}

