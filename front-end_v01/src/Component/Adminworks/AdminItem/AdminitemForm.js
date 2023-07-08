import Input from '../../UI/Input';

import '../../../App.css';
import { useRef } from 'react';

import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AdminitemForm=(props)=>{
    console.log(props.data);
    const qtyref=useRef(0);
    const navigate=useNavigate();
    const abc=localStorage.getItem('admintoken');
    function rr(){
        const nn={
            itemId: props.data.id,
            price: props.data.price,  
            qty: parseInt(qtyref.current.value),
        };
        console.log(nn);
        axios.put(`https://localhost:7126/api/Order/validateisdelivered/${nn.itemId}`,nn,{
            headers:{
                'Authorization': `Bearer ${abc}`
            }
        }).then((response) =>{
            alert('Order delivered successfully');
            console.log(response);
            // navigate('/simpleadmin');
            window.location.reload();
        });
        console.log(nn);
    }

    return (<form className="form">
        <button onClick={rr}>Delivered?</button>
    </form>

    );

};

export default AdminitemForm;