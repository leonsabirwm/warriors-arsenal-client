import React, { useContext, useEffect, useState } from 'react'
import { InventoryItem } from '../InventoryItem/InventoryItem'
import './Inventory.css'
import { BarContext } from './../../App';
import { HiClipboardList } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

export const Inventory = () => {
  const [items,setItems] = useState([]);
  const  [progress,setProgress] = useContext(BarContext);
  const navigate = useNavigate();



  useEffect(()=>{
    setProgress(10)
    fetch('https://obscure-waters-67643.herokuapp.com/items')
    .then(res=> res.json())
    .then(data=>setItems(data.slice(0,6)));
    setProgress(100);
  },[])
  return (
    <div>
     <div className='d-flex justify-content-center'>
     <h3 className='text-center my-4 shadow p-4 d-inline-block mx-auto'>Inventories</h3>
     </div>
      <div className='row mx-5'>
     {
       items.map(item=><InventoryItem key={item._id} item={item}></InventoryItem>)
     }

      </div>
      <div className='text-center mt-4'>
        <button onClick={()=>navigate('/manageinventory')} className='bg-info border border-0 p-3 text-white'><HiClipboardList></HiClipboardList> Manage Inventories</button>
      </div>
    </div>
  )
}
