import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { HiCurrencyBangladeshi,HiTruck,HiOutlineCalculator,HiCollection } from "react-icons/hi";
import './UpdateItem.css'

export const UpdateItem = () => {
    const id = useParams().id;
    const [item,setItem] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/myitem/${id}`)
        .then(res => res.json())
        .then(data =>setItem(data));
    },[])
    
  return (
    <div>
       <div className='row mx-5 d-flex align-items-center justify-content-center'>
           <div className='col-12 col-lg-6'>
               <div className='shadow d-flex justify-content-center py-5 mt-4 item-image'>
                   <img className='img-fluid' src={item.image} alt="" />
               </div>
               <div className='shadow my-5 p-4'>
                   <h3 className='text-center my-3'>Item Description</h3>
                   <p>{item.description}</p>
               </div>
           </div>
           <div className='col-12 col-lg-6'>
               <div className='text-center shadow p-4 m-4'>
                   <h1><HiCollection></HiCollection></h1>
                   <h3 className=''>{item.name}</h3>
               </div>
               <div className='d-flex flex-lg-row flex-column justify-content-center align-items-center'>
                   <div className='shadow rounded-3 p-5 m-4 d-flex flex-column justify-content-center align-items-center'>
                       <h1><HiCurrencyBangladeshi></HiCurrencyBangladeshi></h1>
                   <h4 className='text-nowrap' > Price : {item.price}</h4>

                   </div>
                   <div>

                   <div className='shadow rounded-3 p-5 m-4 d-flex flex-column justify-content-center align-items-center'>
                       <h1><HiTruck></HiTruck></h1>
                   <h4 className='text-nowrap' > Supplier : {item.supplier}</h4>

                   </div>
                   </div>
               </div>
                  <div className='text-center shadow p-4 m-4'> 
                  <h1><HiOutlineCalculator></HiOutlineCalculator></h1>  
                   <h4 className=''>Quantity : {item.quantity}</h4>
                  </div>
           </div>
       </div>

    </div>
  )
}
