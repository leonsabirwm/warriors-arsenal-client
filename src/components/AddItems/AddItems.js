import axios from 'axios';
import React from 'react'
import { auth } from '../../firebase.init';
import './AddItems.module.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';


export const AddItems = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  const handleAddItem = (event)=>{
    event.preventDefault();
    const email = user.email;
    const name = event.target.name.value;
    const price = event.target.price.value;
    const image = event.target.image.value;
    const description = event.target.description.value;
    const quantity = event.target.quantity.value;
    const supplier = event.target.supplier.value;

    const item = {email,name,price,image,description,quantity,supplier};

   axios.post('https://obscure-waters-67643.herokuapp.com/items',item)
   .then(function (response) {
    console.log(response);
    toast.success('product added')
    })
    .catch(function (error) {
        console.log(error);
    });
    event.target.reset();
  }
  return (
    <div>
      <div className='d-flex justify-content-center mt-5'>
      <div className='shadow'>
      <div className='text-black form-body'>
        <form onSubmit={handleAddItem} className='d-flex flex-column p-5'>
         <h3 className='mb-3 text-left'> <span className='fs-2 fw-bold'>|</span> Add Item</h3>
          <input className='mb-3' type="text" required name='name' placeholder='Product Name' />
          <input className='mb-3' type="text" required name='price' placeholder='Product Price' />
          <input className='mb-3' type="text" required name='image' placeholder='Image URL'/>
          <input className='mb-3' type="text" required name='description' placeholder='Description'/>
          <input className='mb-3' type="text" required name='quantity' placeholder='Quantity'/>
          <input className='mb-3' type="text" required name='supplier' placeholder='Supplier'/>
          <div>
          <button className='mt-3 btn btn-dark' type="submit" >Add Item</button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
  )
}
