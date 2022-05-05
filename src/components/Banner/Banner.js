import React from 'react'
import { useNavigate } from 'react-router-dom';
import { HiClipboardList } from "react-icons/hi";


export const Banner = () => {
    const navigate = useNavigate();
  return (
    <div className='row m-5'>
        <div className='col-12 col-lg-6'>
            <img className='img-fluid rounded' src="https://img.freepik.com/free-vector/illustration-character-fixing-cogwheel_53876-26673.jpg?t=st=1651665976~exp=1651666576~hmac=b522a2ad108a430472cf24dd17d1779b544a164c138a61726d9bb876e721799f&w=740" alt="" />
        </div>
        <div className='col-12 col-lg-6 d-flex flex-column align-items-start justify-content-center  mt-5'>
        <div className='d-flex ms-5 flex-column align-items-start justify-content-center'>
           <h2 className=''>Manage Your Arsenal Rapidly</h2>
            <h2 className='' >With Warrior's Arsenal</h2>
           </div>
           <div className='d-flex align-items-center justify-content-center ps-5'>
               <p className='text-justify my-3'>
               As a part of your supply chain, inventory management includes aspects such as controlling and overseeing purchases — from suppliers as well as customers — maintaining the storage of stock, controlling the amount of product for sale, and order fulfillment.Naturally, your company’s precise inventory management meaning will vary based on the types of products you sell and the channels you sell them through. But as long as those basic ingredients are present, you’ll have a solid foundation to build upon.
               </p>
           </div>
        <div className='d-flex ms-5 justify-content-start'>
            <button className='mt-4 text-white p-3 btn-dark border border-0' onClick={()=>navigate('/manageinventory')}><HiClipboardList></HiClipboardList> Manage Inventory</button>
        </div>
        </div>
    </div>
  )
}
