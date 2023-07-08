import Input from '../UI/Input';

import '../../App.css';
import { useRef } from 'react';

import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const SimpleItemForm=(props)=>{
    console.log(props.data);
    const qtyref=useRef(0);
    const navigate=useNavigate();
    const abc=localStorage.getItem('usertoken');

    

    return (<form className="form">
         <div>
         <label className="form-label"><b>Delivered on: </b>{props.data.date}</label>
         </div>
         <br/>
        
        

    </form>

    );

};

export default SimpleItemForm;