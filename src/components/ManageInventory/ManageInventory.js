import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import './ManageInventory.css'

export const ManageInventory = () => {
  // const [takeReload,setTakeReload] = useState(false);
  const navigate = useNavigate();
  const [items,setItems] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/items')
    .then(res=> res.json())
    .then(data=>setItems(data));
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
        axios.delete(`http://localhost:5000/items/${id}`)
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
     <div className='d-flex justify-content-start my-5 mx-5'>
       <button onClick={()=>navigate('/additems')} className='add-button button-38'>Add Items</button>
     </div>
     <div>
     <Table striped bordered hover variant="dark">
  <thead className='align-middle text-center'>
    <tr>
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
