import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div className='text-center text-danger container text-nowrap'>
        <h1 className='my-5'>404!!Page not found!!</h1>
        <button onClick={()=>navigate('/')} className='p-2 border border-0 text-white my-4 bg-dark'>Go Back</button>
    </div>
  )
}
