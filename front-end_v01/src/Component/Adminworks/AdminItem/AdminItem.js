
import AdminitemForm from './AdminitemForm';
import React from 'react';

import '../../../App.css'




const AdminItem =(props)=>{

const price=`Rs.${props.price.toFixed(2)}`;
console.log(props.id);



    return( <li className="meal">

        <div>
        <div><img src={props.imgurl} /></div> 
            <h3>{props.name}</h3>

            <div className="description"><b>{props.uname} Mob:-{props.pno} has <br/>Order of:</b>{props.qty}</div>

            {/* <div>{props.image}</div> */}
            <div className="price">{price}</div>

        </div>

        <div>

<AdminitemForm data={props}/>

        </div>

    </li>);

};

export default AdminItem;