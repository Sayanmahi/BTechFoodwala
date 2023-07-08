import Input from '../../UI/Input';

import '../../../App.css';
import { useRef } from 'react';

import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const OrderitemForm=(props)=>{
    console.log(props.data);
    const qtyref=useRef(0);
    const navigate=useNavigate();
    const abc=localStorage.getItem('usertoken');
    const rr=async()=>{
        const nn={
            itemId: props.data.id,
            price: props.data.price,
            qty: parseInt(qtyref.current.value),
        };
        if(nn.qty<=0)
        {
            alert('Quantity should be greater than 0');
        }
        else{
            try{
        
        const res=await axios.put(`https://localhost:7126/api/Order/Changeqty/${nn.itemId}/${nn.qty}`,nn,{
            headers:{
                'Authorization': `Bearer ${abc}`
            }
        });
        alert('Order changed successfully');
        console.log(res);
        // navigate('/jmyorder');
        window.location.reload();
    
    console.log(nn);
    }
    catch(error)
    {
        alert("Quantity should be greater than 0");
    }
}
}
    const rr1=async()=>{
        const nn={
            itemid: parseInt(props.data.id),
        };
        const res=await axios.delete(`https://localhost:7126/api/Order/${nn.itemid}`,{
            headers:{
                'Authorization': `Bearer ${abc}`
            }
        });
            alert('Order deleted successfully');
            //navigate('/jmyorder');
            window.location.reload();
            console.log(res);

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
         <label className="form-label"><b>Change Quantity</b></label>
         <br/>
         <input type="number" id="number"  ref={qtyref}/>
         </div>
         <br/>
       
            <button className="mx-2" onClick={rr}>Change Quantity</button>
            <button onClick={rr1}>Delete order</button>
        
        

    </form>

    );

};

export default OrderitemForm;