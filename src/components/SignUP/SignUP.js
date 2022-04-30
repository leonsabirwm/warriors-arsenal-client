import React, { useEffect, useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import './SignUP.module.css';


export const SignUP = () => {

  const navigate = useNavigate();
  const [generalError,setGeneralError] = useState({
    passwordError:'',
    emailError:''
  })
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  console.log(user);
  const [userInfo,setUserInfo] = useState({
    name:'',
    email:'',
    password:''
  })

  console.log(user);
  
  useEffect(()=>{
    if(user){
      navigate('/');
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
  return (
    <div>
    <div className='shadow-lg mt-5 w-75 mx-auto p-4 d-flex flex-column align-items-center'>
        <div className='my-5'>
        <form onSubmit={handleSignUP} className='d-flex flex-column'>
          <div className='d-flex flex-column'>
          <h3 className='my-4'>Please Sign Up</h3>
          <input type="text" className='mb-4 border border-dark' placeholder='Your Name' name='name' required/>
          <input onFocus={handleEmailFocus} type="text" className='mb-4 border border-dark' placeholder='Your Email' name='email' required/>
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
          <p className='me-3 text-nowrap'>Was here previously? <button onClick={()=>navigate('/login')} className='text-nowrap border border-0 bg-white text-primary'>Log In</button></p> 
          <p></p>
        </div>
        </div>
        
        </div>
    </div>
  )
}
