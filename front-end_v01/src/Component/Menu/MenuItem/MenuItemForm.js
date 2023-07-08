import Input from '../../UI/Input';

import '../../../App.css';
import { useRef } from 'react';

import axios from 'axios';
import React,{useState} from 'react';
import JWT from "jwt-decode";
const MenuItemForm=(props)=>{
    console.log(props.data);
    const qtyref=useRef(0);
    const abc=localStorage.getItem('usertoken');
    var decoded = JWT(abc);
    const rr=async()=>{
        const nn={
            itemId: props.data.id,
            price: props.data.price,
            userId: decoded.UserId,
            qty: parseInt(qtyref.current.value),
        };
        if(nn.qty<=0)
        {
            alert('Quantity should be >0');
        }
        else{

        
        const tt=await axios.post("https://localhost:7126/api/Order",nn,{
            headers:{
                'Authorization': `Bearer ${abc}`
            }
        }).then((response) =>{
            alert('Order placed successfully');
            console.log(response);
        }).catch((error)=>{
            alert("Quantity should be >0");
        });
        console.log(nn);
    
}
    }

    return (<form className="form">

        {/* <Input label="Amount"
         input={{

            id: 'amount',

            type: 'number',

            min: '1',

            max: '5',

            step: '1',

            defaultvalue: '0'

        }}/> */}
         <div>
         <label className="form-label"><b>Quantity</b></label>
         <input type="number" id="number"  ref={qtyref}/>
         </div>
         <br/>

        <button onClick={rr}>+Add</button>

    </form>

    );

};

export default MenuItemForm;