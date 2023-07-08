import Card from '../UI/Card';

import MenuItem from './MenuItem/MenuItem';

import React from 'react';

import  '../../App.css';
import axios from'axios';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

// const DUMMY_MENU = [

//     {

//       id: '1',
  
//       name: 'Sprite',

//       description: 'Sprite is a clear, lemon and lime-flavored soft drink ',

//       price: 40,

//     },

//     {

//       id: '2',

//       name: 'Maaza',

//       description: 'A german specialty!',

//       image:'maaza.jpg',

//       price: 42,

//     },

//     {

//       id: '3',

//       name: 'Pepsi',

//       description: 'American, black',

//       price: 45,

//     },

   

//   ];

const AvailableMenu = () => {


    const menulist=DUMMY_MENU.map(menu=>

         <MenuItem

         key={menu.id}

         name={menu.name}

         description={menu.description}

          price={menu.price}

          />);
          const navigate=useNavigate();
          function menus1()
          {
    
              navigate('/availablemenu');
          }
          function myorder()
          {
            navigate('/jmyorder');
          }

   return (
   <>
       <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home" >BTech Foodwala</Navbar.Brand> 
             <Nav className="container-fluid">
           
            
            <Nav className="ms-auto">
            <Nav.Link href="#menus" onClick={menus1}>Menus</Nav.Link>  
            <Nav.Link href="#my orders" onClick={myorder}>My Orders</Nav.Link>    
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

};




export default AvailableMenu;