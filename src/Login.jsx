import React from 'react';
import './Login.css';
import bg1  from './logos/login-bg-1.svg';
import logo  from './logos/Logo.svg';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  function LogIn(event){
    event.preventDefault();
    navigate("/ProjectManagement/Dashboard");
  }

  return (
    <>
    <img className='bg1' src={bg1} alt='./logos/login-bg-1.svg'/>
    <div className='login-page'>    
    <img id='logo' src={logo} alt='./logos/Logo.svg'/>
    <h3 id='color-w'>Online Project Management</h3>

    <form className='login-form' onSubmit={LogIn}>
    <h1 id="formHeading">Login to get started</h1>
      <div className='input-field'>
      <label>Email</label>
      <input required id='Uemail' name='email' type='email'></input >
      </div>
      <div className='input-field'>
      <label>Password</label>
      <input required id='Upassword' name='password' type='Password'></input>
      <span id='f-password'><p>Forgot Password?</p></span>
      </div>
      <button id='btnLOGIN' type='submit' >Login</button>  
    </form>
    </div>
    </>   
  )}