import React from 'react'
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import './ManageInventory.css'

export const ManageInventory = () => {
  const navigate = useNavigate();
  return (
    <div>
     <div className='d-flex justify-content-start my-5 mx-5'>
       <button onClick={()=>navigate('/additems')} className='add-button button-38'>Add Items</button>
     </div>
     <div>
     <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Item Name</th>
      <th>Price</th>
      <th>Image</th>
      <th>Seller</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td className='text-center'><button>Delete</button></td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
     </div>
    </div>
  )
}
