import React, { useEffect, useState } from 'react'
import { useSignInWithEmailAndPassword, useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import { Loading } from '../Loading/Loading';
import './Login.css';
import googleLogo from '../../../src/images/google-logo.png';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';




export const Login = () => {
  const [sendPasswordResetEmail, sending, passResetError] = useSendPasswordResetEmail(
    auth
  );
  const [resetEmail,setResetEmail] = useState('');
  const [user] = useAuthState(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handlePasswordReset=()=>{
    if(resetEmail){

      sendPasswordResetEmail(resetEmail)
    }
    else{
      toast.error('Fill the email field to continue',{
        id:'jgj98', style: {backgroundColor:'black',color:'white'},
      });
    }
  }
  let location = useLocation();
  const navigate = useNavigate();
  const handleGoogleSignIn = ()=>{
    signInWithGoogle();
  }
  const [
    signInWithEmailAndPassword,
    ,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  console.log(passResetError?.code)
  useEffect(()=>{
    if(sending){
      toast.error('Sending Password Reset Email',{
        id:'jgj98',icon:'🚀', style: {backgroundColor:'black',color:'white'},
      });
    }
  },[sending])

  useEffect(()=>{
    if(passResetError){

      console.log(passResetError.code);
      switch(passResetError.code){
        case("auth/wrong-password"): 
        toast.error('Wrong Password',{
          id:'jgj98', style: {backgroundColor:'black',color:'white'},
        });
        break;
        case("auth/invalid-email"): 
        toast.error('Invalid Email',{
          id:'jgj98',icon: '😢', style: {backgroundColor:'black',color:'white'},
        });
        break;
        case("auth/user-not-found"): 
        toast.error('User not found',{
          id:'jgj98',  icon: '😢', style: {backgroundColor:'black',color:'white'},
        });
        break;
        default: toast.error('Something went wrong',{id:"gj45",style: {backgroundColor:'black',color:'white'}},);
        break;
      }
    }
  },[passResetError])
  useEffect(()=>{
    if(error){

      console.log(error.code);
      switch(error.code){
        case("auth/wrong-password"): 
        toast.error('Wrong Password',{
          id:'jgj98', style: {backgroundColor:'black',color:'white'},
        });
        break;
        case("auth/invalid-email"): 
        toast.error('Invalid Email',{
          id:'jgj98',icon: '😢', style: {backgroundColor:'black',color:'white'},
        });
        break;
        case("auth/user-not-found"): 
        toast.error('User not found',{
          id:'jgj98',  icon: '😢', style: {backgroundColor:'black',color:'white'},
        });
        break;
        default: toast.error('Something went wrong',{id:"gj45",style: {backgroundColor:'black',color:'white'}},);
        break;
      }
    }
  },[error])

  
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
  console.log(resetEmail);
  return (
    <div>
      {loading?<Loading></Loading>:
    <div className='shadow-lg my-5 container  mx-auto p-4 d-flex flex-column align-items-center .login-component'>
        <div className='my-5'>
        <form onSubmit={handleLogin} className='d-flex flex-column'>
          <div className='d-flex flex-column'>
          <h3 className='my-4'>Please Login</h3>
          <input onBlur={(e)=>setResetEmail(e.target.value)} type="text" className='mb-4 border border-dark' placeholder='Your Email' name='email' required/>
          <input type="password" className='mb-4 border border-dark' placeholder='Password' name='password' required/>
          </div>
          <div>
            <button className='btn btn-dark' type='submit'>Login</button>
          </div>
        </form>
        <div className='d-flex align-items-center justify-content-start w-25 mt-4'>
          <p className='me-3 text-nowrap'>Forgot Password? <button onClick={handlePasswordReset} className='text-nowrap border border-0 bg-light text-primary'>Reset Password</button></p> 
          <p></p>
        </div>
        <div className='d-flex align-items-center justify-content-start w-25 mt-1'>
          <p className='me-3 text-nowrap'>New to Warrior Arsenal? <button onClick={()=>navigate('/signup')} className='text-nowrap border border-0 bg-light text-primary'>Sign Up</button></p> 
          <p></p>
        </div>
        <div className='d-flex align-items-center justify-content-center'>
          <div className='border border-top border-dark w-25'></div>
          <div>
            <p className='mx-2 fs-5'>OR</p>
          </div>

          <div className='border border-top border-dark w-25'></div>

        </div>
        <div className='text-center mt-3'><button onClick={handleGoogleSignIn} className='p-2 border border-0 bg-dark text-white'> <img className='google-logo' src={googleLogo} alt="" /> Continue With Google</button></div>
        
        </div>
        
        
        </div>}
    </div>
       
)
}

