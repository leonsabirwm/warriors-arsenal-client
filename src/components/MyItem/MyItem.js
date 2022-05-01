import React from 'react'
import './MyItem.css'

export const MyItem = ({item,handler}) => {
  return (
    <div className='my-item shadow-sm bg-white p-4 row col-12 col-lg-4 d-flex justify-content-center align-items-center'>
        <div className='col-6 d-flex justify-content-center align-items-center'>
            <img className='img-fluid w-25' src={item.image} alt="" />
        </div>
        <div className='col-6'>
            <div>
            <p>Name : {item.name} </p>
            <p>Price : {item.price} </p>
            <p>Supplier : {item.supplier} </p>
            <p>Quantity : {item.quantity} </p>
            </div>
            <div>
                <button className='text-white' onClick={()=>handler(item._id)}>Delete</button>
            </div>
            

        </div>
    </div>
  )
}
