import React, { useEffect } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import './Login.module.css';



export const Login = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  console.log(user);
  
  let from = location.state?.from?.pathname || "/";
  
  useEffect(()=>{
    if(user){
      navigate(from);
    }
  },[user])
  const handleLogin = (event)=>{

    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const user = {name,email,password};
    signInWithEmailAndPassword(email,password);
  }
  return (
    <div>
    <div className='shadow-lg mt-5 w-75 mx-auto p-4 d-flex flex-column align-items-center'>
        <div className='my-5'>
        <form onSubmit={handleLogin} className='d-flex flex-column'>
          <div className='d-flex flex-column'>
          <h3 className='my-4'>Please Login</h3>
          <input type="text" className='mb-4 border border-dark' placeholder='Your Email' name='email' required/>
          <input type="password" className='mb-4 border border-dark' placeholder='Password' name='password' required/>
          </div>
          <div>
            <button className='btn btn-dark' type='submit'>Login</button>
          </div>
        </form>
        <div className='d-flex align-items-center justify-content-start w-25 mt-4'>
          <p className='me-3 text-nowrap'>New to Warrior Arsenal? <button onClick={()=>navigate('/signup')} className='text-nowrap border border-0 bg-light text-primary'>Sign Up</button></p> 
          <p></p>
        </div>
        </div>
        
        </div>
    </div>
       
  )
}
