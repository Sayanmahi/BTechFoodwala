import React,{useState, useRef} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';
import "./CssCom/Reg.css";
import axios from "axios";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Adminhome from './Adminhome';
// import * as mdb from 'mdb-ui-kit'; // lib
// import { Input } from 'mdb-ui-kit'; // module


function Login(){   
  const emailref = useRef('');
  const passwordref = useRef('');
  const navigate=useNavigate();
  const handlesave=async () => {
    const data={
      Email:emailref.current.value,
      Password:passwordref.current.value,
     };
     try {
      const res =await axios.post(`https://localhost:7126/api/Login/AdminLog/${data.Email}/${data.Password}`);

      const { token,massage } = res.data;
      localStorage.setItem('admintoken',res.data);
      console.log(res.data);
      alert('Logged in successfully');
      navigate('/adminhome');
     

    } catch (error) {

      const { massage } = error.response.data;

      alert(error.response.data);

      console.log(error.response);

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
                <h3 className="mb-5 text-uppercase">ADMIN LOGIN</h3>



                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="Email" className="form-control form-control-lg" ref={emailref}/>
                      <label className="form-label" htmlFor="form3Example1m1">Email</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="password" id="Password" className="form-control form-control-lg" ref={passwordref}/>
                      <label className="form-label" htmlFor="form3Example1n1">Password</label>
                    </div>
                  </div>
                </div>

                
               




                <div className="d-flex justify-content-end pt-3">
                <button type="button" className="btn btn-warning btn-lg ms-2" onClick={handlesave1}>Back</button>
                  <button type="button" className="btn btn-warning btn-lg ms-2" onClick={handlesave}>LOGIN</button>
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
export default Login;