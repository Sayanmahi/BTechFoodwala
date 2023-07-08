import { useEffect,useState } from "react"
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from '../UI/Card';
import MenuItem from './MenuItem/MenuItem';

import React from 'react';
import Container from 'react-bootstrap/Container';

import  '../../App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';

const Simplemenus = () => {
    const [List,setList]=useState([]);
    const navigate=useNavigate();
    const abc=localStorage.getItem('usertoken');
    useEffect(()=>{
        axios.get("https://localhost:7126/api/Item/Getallitems")
        .then((res)=>{
            console.log(res.data);
            setList(res.data);
    })
    },[]);
    
    const menulist=List.map(menu=>

        <MenuItem

        id={menu.id}

        name={menu.prodName}

        description={menu.description}

         price={menu.price}
         imgurl={menu.imageUrl}

         />);
         function rr(){
            navigate('/simplemenus');
         }
         function rr1(){
            navigate('/jmyorder');
         }
         function rr3(){
            localStorage.removeItem('usertoken');
            navigate("/");
         }
         function hh3(){
            navigate("/menu");
         }
         function rr2(){
            navigate('/simple');
         }
  return (
    // <div>
    //   {List.map(item => (
    //   <li key={item.id}>
    //     <div>{item.id}</div>
    //     <div>{item.prodname}</div>
    //     <div>{item.description}</div>
    //     <div>{item.price}</div>
    //   </li>
    // ))}
    // </div>
    
    <>
    <Navbar bg="dark" variant="dark">
         <Container>
         <Navbar.Brand href="#home" onClick={hh3}>BTech Foodwala</Navbar.Brand> 
          <Nav className="container-fluid">
        
         
         <Nav className="ms-auto">
         <Nav.Link href="#menus" onClick={rr}>Menus</Nav.Link>  
         <Nav.Link href="#my orders" onClick={rr1}>My Orders</Nav.Link>   
         <Nav.Link href="#prev orders" onClick={rr2}>Previous Orders</Nav.Link>  
         <Nav.Link  onClick={rr3}>LOGOUT</Nav.Link>
        
         </Nav> 
         </Nav>
         </Container>
     </Navbar>
<section className="ameals">
     <ul>

     <Card>

     {menulist}

     </Card>

 </ul>

</section>
</>) ;
}

export default Simplemenus;
