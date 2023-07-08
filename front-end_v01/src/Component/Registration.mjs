import React,{useState, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';
import './CssCom/Reg.css';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit'; // module


function Registration(){ 
  const navigate=useNavigate();  
  const nameref = useRef('');
  const emailref = useRef('');
  const passwordref = useRef('');
  const phonenoref=useRef('');

  const handlesave = (event) => {
    event.preventDefault();
    const data={
     Name:nameref.current.value,
     Email:emailref.current.value,
     Password:passwordref.current.value,
     PhoneNumber:phonenoref.current.value,
    };
    if(data.Name.length==0 || data.Email.length==0 || data.Password.length==0 || data.PhoneNumber.length==0)
    {
      alert("Please enter details");
    }
    else{
    
    console.log(data);
    axios.post(`https://localhost:7126/api/Login/Register/${data.Name}/${data.Email}/${data.Password}/${data.PhoneNumber}`,{

    }).then((response) =>{
      if(response.data === "Already have account")
      {
        alert('Already have an account.Please Login.')
      }
      else{
      alert('Successfully Registered!!Please Login Now')
      console.log(response);
      }
      navigate('/login');
    }).catch((error) => {
      alert('Something went wrong');
      console.log(error);
    });
  }
}
  function handlesave1(){
    navigate("/");
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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRobMkU-fXhcU2gzRrLT6NdhR40SKVpZhK28g&usqp=CAU" height="1024" width="1024"
                alt="Sample photo" className="img-fluid change-for-new" />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">Registration</h3>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="Name" className="form-control form-control-lg" name="name" ref={nameref} />
                      <label className="form-label" htmlFor="form3Example1m" >Name</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="Email" className="form-control form-control-lg" name="email" ref={emailref}/>
                      <label className="form-label" htmlFor="form3Example1m1">Email</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input  id="Password" className="form-control form-control-lg" type="password" name="password" ref={passwordref}/>
                      <label className="form-label" htmlFor="form3Example1n1">Password</label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="PhoneNo" className="form-control form-control-lg" ref={phonenoref} />
                  <label className="form-label" htmlFor="form3Example8">Phone No.</label>
                </div>

                
               




                <div className="d-flex justify-content-end pt-3">
                <button type="button" className="btn btn-warning btn-lg ms-2" onClick={handlesave1}>Back</button>
                  <button type="button" className="btn btn-warning btn-lg ms-2" onClick={handlesave}>REGISTER</button>
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
export default Registration;