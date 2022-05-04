import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Banner = () => {
    const navigate = useNavigate();
  return (
    <div className='row m-5'>
        <div className='col-12 col-lg-6'>
            <img className='img-fluid rounded' src="https://img.freepik.com/free-vector/illustration-character-fixing-cogwheel_53876-26673.jpg?t=st=1651665976~exp=1651666576~hmac=b522a2ad108a430472cf24dd17d1779b544a164c138a61726d9bb876e721799f&w=740" alt="" />
        </div>
        <div className='col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center text-center  mt-5'>
           <div>
           <h2 className='text-nowrap'>Manage Your Arsenal Rapidly</h2>
            <h2 className='' >With Warrior's Arsenal</h2>
           </div>
        <div className='d-flex justify-content-start'>
            <button className='mt-4 text-white p-3 btn-dark border border-0' onClick={()=>navigate('/manageinventory')}>Manage Inventory</button>
        </div>
        </div>
    </div>
  )
}
