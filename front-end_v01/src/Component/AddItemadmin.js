import React,{useState, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';
import './CssCom/Reg.css';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import {useNavigate, useLocation} from 'react-router-dom';
import useCookies from 'react-cookie/cjs/useCookies';
// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit'; // module


function AddItemadmin(){

const location=useLocation();
  const navigate=useNavigate();  
  const prodnameref = useRef('');
  const priceref = useRef('');
  const descriptionref = useRef('');
  const imageurlref=useRef('');
  const abc=localStorage.getItem('admintoken');

  const handlesave = async() => {
    // const token1=location.state.tok;
// console.log(token1);
    const data={
     ProdName:prodnameref.current.value,
     Price:priceref.current.value,
     Description:descriptionref.current.value,
     ImageUrl:imageurlref.current.value,
    };
    // console.log(data);
    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${token1}`
    //     }
    // }
    try {

        
        const res =await axios.post(`https://localhost:7126/api/Item/AddItem`,data,{
          headers:{
              'Authorization': `Bearer ${abc}`
          }
      });
  
        console.log(res);
        alert('Item added');
        navigate('/adminhome');

  
      } catch (error) {
  
        // const { massage } = error.response.data;
  
    
         alert(error.response.data);
  
        console.log(error.response);
  
      }
  }
  function handlesave1(){
    navigate('/adminhome');
  }
  

    return(
      <>
      <section className="h-100 bg-dark">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img src=""
                alt="Sample photo" className="img-fluid change-for-new" />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">Add Item</h3>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="Name" className="form-control form-control-lg" name="name" ref={prodnameref} />
                      <label className="form-label" htmlFor="form3Example1m" >Product Name</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="Email" className="form-control form-control-lg" name="email" ref={priceref}/>
                      <label className="form-label" htmlFor="form3Example1m1">Price(Rs.)</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input  id="text" className="form-control form-control-lg" type="text" ref={descriptionref}/>
                      <label className="form-label" htmlFor="form3Example1n1">Product Description</label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="text"  className="form-control form-control-lg" ref={imageurlref} />
                  <label className="form-label" htmlFor="form3Example8">Image Url</label>
                </div>

                
               




                <div className="d-flex justify-content-end pt-3">
                <button type="button" className="btn btn-warning btn-lg ms-2" onClick={handlesave1}>Back</button>
                  <button type="button" className="btn btn-warning btn-lg ms-2" onClick={handlesave}>Add Item</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </>
    );
}
export default AddItemadmin;