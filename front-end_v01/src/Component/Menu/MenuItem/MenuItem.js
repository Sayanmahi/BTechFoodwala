import MenuItemForm from './MenuItemForm';

import React from 'react';

import '../../../App.css'




const MenuItem =(props)=>{

const price=`Rs.${props.price.toFixed(2)}`;
console.log(props.id);



    return( <li className="meal">

        <div>
            <div><img src={props.imgurl} /></div> 
            <h3>{props.name}</h3>

            <div className="description">{props.description}</div>

            {/* <div>{props.image}</div> */}
            <div className="price">{price}</div>

        </div>

        <div>

<MenuItemForm data={props}/>

        </div>

    </li>);

};

export default MenuItem;