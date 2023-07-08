import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import {Routes, Route, useNavigate} from 'react-router-dom';


export default function Home() {

    const navigate=useNavigate();
    function rr() 
    {
        navigate('/register');
    }

    function usl()
    {
        navigate('/login');
    }

    function adl()
    {
        navigate('/adminlogin');
    }
    
    function hh()
    {
        navigate('/');
    }
    // function mm()
    // {
    //     navigate('/menu');
    // }


return (
<>
<div>
<Navbar bg="dark" variant="dark">
<Container>
<Navbar.Brand href="#Home" onClick={hh}>BTech Foodwala</Navbar.Brand>
<Nav className="ms-auto">
{/* <Nav.Link href="#Menu" onClick={mm}>Menu</Nav.Link>  */}
<Nav.Link href="#Login" onClick={rr}>Register</Nav.Link>
<Nav.Link href="#Userlogin" onClick={usl}>User Login</Nav.Link>
<Nav.Link href="#Adminlogin" onClick={adl}>Admin Login</Nav.Link>

</Nav> 
</Container>
</Navbar>
{/* <div className="CoverImg"></div> */}
</div>
</>
 );

}