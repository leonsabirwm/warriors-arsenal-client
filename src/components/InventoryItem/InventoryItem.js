import React from 'react'
import './InventoryItem.css'
import { useNavigate } from 'react-router-dom';

export const InventoryItem = ({item}) => {
  const navigate = useNavigate();
  return (
    <div className='col-4 inventory-item'>
        <div className='row shadow-sm d-flex align-items-center justify-content-center ps-4'>
            <div className='col-7 py-5 d-flex flex-column align-items-start justify-content-center'>
              <div><img className='img-fluid w-50' src={item.image} alt="" /></div>
              <h4 className='my-3'>{item.name}</h4>
              <p>{item.description}</p>
              <div>
                <button onClick={()=>navigate(item._id)} className='update-btn'>Update</button>
              </div>
            </div>

            <div className='col-5 py-5 bg-light'>
              <div className='py-5 d-flex flex-column align-items-start justify-content-evenly'>
              <h5 className='shadow-sm m-2 p-2'>Price : $ {item.price}</h5>
              <h5 className='shadow-sm m-2 p-2'>Quantity : {item.quantity}</h5>
              <h5 className='shadow-sm m-2 p-2'>Supplier Name : {item.supplier}</h5>
              </div>
            </div>
        </div>
    </div>
  )
}
