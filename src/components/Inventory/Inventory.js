import React, { useEffect, useState } from 'react'
import { InventoryItem } from '../InventoryItem/InventoryItem'
import './Inventory.css'

export const Inventory = () => {
  const [items,setItems] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/items')
    .then(res=> res.json())
    .then(data=>setItems(data.slice(0,6)));
  },[])
  return (
    <div>
      <h3 className='text-center my-4'>Inventories</h3>
      <div className='row mx-5'>
     {
       items.map(item=><InventoryItem key={item._id} item={item}></InventoryItem>)
     }

      </div>
      
    </div>
  )
}
