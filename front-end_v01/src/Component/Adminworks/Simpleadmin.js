import { useEffect,useState } from "react"
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from '../MyorderUI/Card';
import AdminItem from './AdminItem/AdminItem'
import React from 'react';
import Container from 'react-bootstrap/Container';

import  '../../App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import JWT from "jwt-decode";

const Simpleadmin = () => {
    const [List,setList]=useState([]);
    const navigate=useNavigate();
    const abc=localStorage.getItem('admintoken');
    var decoded = JWT(abc);

    useEffect(()=>{
        axios.get(`https://localhost:7126/api/Order/Getordersnotdeliverd`,{
            headers:{
                'Authorization': `Bearer ${abc}`
            }
        })
        .then((res)=>{
            console.log(res.data);
            setList(res.data);
    })
    },[]);
    const menulist=List.map(menu=>

        <AdminItem

        id={menu.id}
        qty={menu.qty}
        name={menu.itemname}
         price={menu.price}
         uname={menu.uname}
         pno={menu.pno}
         imgurl={menu.imgurl}
         />);
         function rr(){
            navigate('/additemadmin');
         }
         function rr1(){
            navigate('/simpleadmin');
         }
         function hh1(){
            navigate('/adminhome');
         }
         function rr3(){
            localStorage.removeItem('admintoken');
            navigate("/");
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
         <Navbar.Brand href="#home" onClick={hh1}>BTech Foodwala</Navbar.Brand> 
          <Nav className="container-fluid">
        
         
         <Nav className="ms-auto">
         <Nav.Link href="#additem" onClick={rr}>Add Item</Nav.Link>  
         <Nav.Link href="#notdelivered" onClick={rr1}>Not Delivered</Nav.Link>   
         <Nav.Link onClick={rr3}>LOGOUT</Nav.Link>  
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

export default Simpleadmin;
