import React, { useEffect, useState } from 'react'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import './SignUP.css';
import googleLogo from '../../../src/images/google-logo.png'
import toast from 'react-hot-toast';
import { Loading } from '../Loading/Loading';


export const SignUP = () => {
  const [user] = useAuthState(auth);
  let location = useLocation();
  const navigate = useNavigate();
  const [generalError,setGeneralError] = useState({
    passwordError:'',
    emailError:''
  })
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [
    createUserWithEmailAndPassword,
    ,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification : true});
  console.log(user);
  console.log(error);
  useEffect(()=>{
    if(error){

      console.log(error.code);
      switch(error.code){
        case("auth/email-already-in-use"): 
        toast.error('This email is already in use',{
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
  const [userInfo,setUserInfo] = useState({
    name:'',
    email:'',
    password:''
  })

  console.log(user);
  let from = location.state?.from?.pathname || "/";
  
  useEffect(()=>{
    if(user){
      navigate(from);
      
      toast.success("Email Verification Sent.",{id:"48de"});
      toast.success("User Created!!",{id:"45de"});
    }
  },[user])
  const handlePasswordBlur = (event)=>{
    const pass = event.target.value;
    if(pass.length < 7){
      setGeneralError({...generalError,passwordError:'Password must contain at least eight character'})
    }
    setUserInfo({...userInfo,password:pass});
  }
  const handleEmailFocus = () =>{
    setGeneralError({...generalError,emailError:''});
  }

  const handleSignUP = (event)=>{

    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const validEmail = /\S+@\S+\.\S+/.test(email);
    
    if(validEmail && password.length>7){
      console.log('valid email and pass')
      setGeneralError({...generalError,passwordError:''})

      // const user = {name,email,password};
      createUserWithEmailAndPassword(email,password);
    }
    if(!validEmail){
      setGeneralError({...generalError,emailError:'Please enter a valid email'})
    }

   
  }
  const handleGoogleSignIn = ()=>{
    signInWithGoogle();
  }
  return (
    <div>
   {
     loading?<Loading></Loading>: <div className='shadow-lg my-5 w-75 mx-auto p-4 d-flex flex-column align-items-center'>
     <div className='my-5'>
     <form onSubmit={handleSignUP} className='d-flex flex-column'>
       <div className='d-flex flex-column'>
       <h3 className='my-4'>Please Sign Up</h3>
       <input type="text" className='mb-4 border border-dark' placeholder='Your Name' name='name' required/>
       <input onFocus={handleEmailFocus} type="text" className='mb-2 border border-dark' placeholder='Your Email' name='email' required/>
       {
         <p className='text-danger'>{generalError.emailError}</p>
       }
       <input onBlur={handlePasswordBlur} type="password" className='mb-4 border border-dark' placeholder='Password' name='password' required/>
       {
         <p className='text-danger'>{generalError.passwordError}</p>
       }
       </div>
       <div>
         <button className='btn btn-dark' type='submit'>Sign Up</button>
       </div>
     </form>
     <div className='d-flex align-items-center justify-content-start w-25 mt-4'>
       <p className='me-3 text-nowrap'>Was here previously? <button onClick={()=>navigate('/login')} className='text-nowrap border border-0 bg-light text-primary'>Log In</button></p> 
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
     
     </div>
   }
    </div>
  )
}
