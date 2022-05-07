import React from 'react'
import './InventoryItem.css'
import { useNavigate } from 'react-router-dom';

export const InventoryItem = ({item}) => {
  const navigate = useNavigate();
  return (
    <div className='col-lg-4 col-12 inventory-item'>
        <div className='row shadow d-flex align-items-center justify-content-center ps-4'>
            <div className='col-7 py-5 d-flex flex-column align-items-start justify-content-center left-segment'>
              <div><img className='img-fluid' src={item.image} alt="" /></div>
              <h4 className='my-3'>{item.name}</h4>
              <p>{item.description.length>=90 ? `${item.description.slice(0,90)} .....`  : item.description }</p>
              <div>
                <button onClick={()=>navigate(`inventory/${item._id}`)} className='update-btn'>Update</button>
              </div>
            </div>

            <div className='col-5 py-5 bg-white left-segment'>
              <div className='py-5 d-flex flex-column align-items-start justify-content-evenly'>
              <h5 className='shadow-sm m-2 p-2'>Price : $ {item.price}</h5>
              <h5 className='shadow-sm m-2 p-2'>Quantity : {item.quantity}</h5>
              <h5 className='shadow-sm m-2 p-2'>Supplier : {item.supplier}</h5>
              </div>
            </div>
        </div>
    </div>
  )
}
