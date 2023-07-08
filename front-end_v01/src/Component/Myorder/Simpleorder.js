import { useEffect,useState } from "react"
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from '../MyorderUI/Card';
import OrderItem from './OrderItem/OrderItem'
import React from 'react';
import Container from 'react-bootstrap/Container';

import  '../../App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import JWT from "jwt-decode";

const Simpleorder = () => {
    const [List,setList]=useState([]);
    const navigate=useNavigate();
    const abc=localStorage.getItem('usertoken');
    var decoded = JWT(abc);

    useEffect(()=>{
        axios.get(`https://localhost:7126/api/Order/getwhatordered/${decoded.UserId}`,{
            headers:{
                'Authorization': `Bearer ${abc}`
            }
        })
        .then((res)=>{
            console.log(res.data);
            if(res.data.length==0)
            {
                alert('No orders found!! Please order something.');
            }
            setList(res.data);
    })
    },[]);
    const menulist=List.map(menu=>

        <OrderItem

        id={menu.id}
        qty={menu.qty}
        name={menu.itemname}
         price={menu.price}
         imgurl={menu.imgurl}

         />);
         function rr(){
            navigate('/simplemenus');
         }
         function rr1(){
            navigate('/jmyorder');
         }
         function rr4(){
            navigate('/menu');
         }
         function rr3(){
            localStorage.removeItem('usertoken');
            navigate("/");
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
         <Navbar.Brand href="#home" onClick={rr4}>BTech Foodwala</Navbar.Brand> 
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

export default Simpleorder;
