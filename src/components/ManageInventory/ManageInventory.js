import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import './ManageInventory.css'
import { BarContext } from './../../App';

export const ManageInventory = () => {
  // const [takeReload,setTakeReload] = useState(false);
  const navigate = useNavigate();
  const [items,setItems] = useState([]);
  const  [progress,setProgress] = useContext(BarContext);
  useEffect(()=>{
    setProgress(10);
    fetch('https://obscure-waters-67643.herokuapp.com/items')
    .then(res=> res.json())
    .then(data=>setItems(data));
    setProgress(100)
  },[])

  const handleDelete = (id)=>{
    swal({
      title: "Are you sure?",
      text: "Dleletion causes parmanent removal of item!",
      icon: "error",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.delete(`https://obscure-waters-67643.herokuapp.com/items/${id}`)
        .then(function (response) {
          console.log(response);
          })
          .catch(function (error) {
              console.log(error);
          });
        swal("Your item has been deleted!", {
          icon: "success",
        });

        const restItems = items.filter(item =>item._id !== id)
        setItems(restItems);
      } else {
        swal("Your selected item is not removed !!!");
      }
    });
  }
  return (
    <div>
     <div className='shadow w-50 mx-auto py-4 d-flex flex-column align-items-center justify-content-center my-5 px-4'>
       <div className='my-3'>
         <h5 className=''>Total Items : {items.length}</h5>

       </div>
       <div>
       <button onClick={()=>navigate('/additems')} className='add-button button-38'>Add Items</button>
       </div>
     </div>
     <div className='d-flex justify-content-center align-items-center'>
     <Table striped bordered hover variant="light" className='table'>
  <thead className='align-middle text-center'>
    <tr>
      <th>Index</th>
      <th>Item Name</th>
      <th>Price</th>
      <th>Image</th>
      <th>Quantity</th>
      {/* <th>Supplier</th> */}
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      items.map(item =>{
       return <tr key={item._id} className='align-middle text-center'>
        
        <td>{items.indexOf(item) + 1}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td><img className='table-image' src={item.image}/></td>
        <td>{item.quantity}</td>
        {/* <td>{item.supplier}</td> */}
        <td className='text-center'><button onClick={()=>handleDelete(item._id)} className='bg-danger border-0 outline-0 p-2 text-white'>Delete</button></td>
      </tr>
      } )
    }
   
    
  </tbody>
</Table>
     </div>
    </div>
  )
}
