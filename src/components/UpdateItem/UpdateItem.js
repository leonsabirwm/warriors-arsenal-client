import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { HiCurrencyBangladeshi,HiTruck,HiOutlineCalculator,HiInformationCircle,HiRefresh,HiClipboardList } from "react-icons/hi";
import './UpdateItem.css'
import axios from 'axios';
import toast from 'react-hot-toast';
import { BarContext } from './../../App';

export const UpdateItem = () => {
    const navigate = useNavigate();
  const  [progress,setProgress] = useContext(BarContext);
    const id = useParams().id;
    const [item,setItem] = useState({});

    useEffect(()=>{
        setProgress(10)
        fetch(`https://obscure-waters-67643.herokuapp.com/inventoryitem/${id}`)
        .then(res => res.json())
        .then(data =>setItem(data));
        setProgress(100)
    },[])
    
    const handleShipped = ()=>{
        const previousQuantity = item.quantity;
        if(previousQuantity <= 0) toast.error("Stock Out",{
            style:{
                backgroundColor:'black',color:'white'
            }
        });
        if(previousQuantity > 0){
            const newQuantity = parseInt(previousQuantity) - 1;
            setItem({...item,quantity:newQuantity});
            console.log((newQuantity));
            axios.put(`https://obscure-waters-67643.herokuapp.com/inventoryitem/${id}`,{newQuantity})
            .then(function (response) {
                console.log(response);
                toast.success('Item Shipped',{id:"4hyu"})
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
       
            // event.target.reset();
    }

    const handleRestock = (event)=>{
        event.preventDefault();
        const quantity = event.target.quantity.value;
        if(quantity>0){
            const previousQuantity = item.quantity;
        const newQuantity = parseInt(previousQuantity) + parseInt(quantity);
        setItem({...item,quantity:newQuantity});
        console.log((newQuantity));
        axios.put(`https://obscure-waters-67643.herokuapp.com/inventoryitem/${id}`,{newQuantity})
        .then(function (response) {
            console.log(response);
            toast.success(`${quantity} item restocked`,{id:"4hyu"})
            })
            .catch(function (error) {
                console.log(error);
            });
            event.target.reset();
        }
        else{
            toast.error("Insert a valid quantity",{
                id:'uy76',
                style:{
                    backgroundColor:'black',color:'white'
                }
            });
        }
    }
  return (
    <div>
       <div className='row mx-5 d-flex align-items-center justify-content-center'>
           
           <div className='col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center'>
           <div className='text-center d-flex align-items-center shadow p-4 m-4'>
                   <h3 className='me-3'><HiInformationCircle></HiInformationCircle></h3>
                   <h3 className=''>{item.name}</h3>
               </div>
               <div className='shadow d-flex justify-content-center py-5 mt-4 item-image'>
                   <img className='img-fluid' src={item.image} alt="" />
               </div>
               <div className='shadow my-5 p-4'>
                   <h3 className='text-center my-3'>Item Description</h3>
                   <p className='item-description'>{item.description}</p>
               </div>
           </div>
           <div className='col-12 col-lg-6 detail-disp'>

           <div className='shadow d-flex flex-column justify-content-center align-items-center p-4'>
               <div><h5><button onClick={()=>navigate('/manageinventory')} className='bg-info my-4 p-3 border text-white  border-0'><HiClipboardList></HiClipboardList> Manage Inventory</button></h5></div>
               <div>
                  <h5>
                  <button onClick={handleShipped} className='bg-info text-white p-3 border border-0'><HiTruck></HiTruck> Shipped</button>
                  </h5>
               </div>
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
                   <h4 className=''>Quantity : {item.quantity ? item.quantity : "N/A"}</h4>
                  </div>

                <div className='shadow p-5 d-flex flex-column align-items-center'>
                   <form action="" onSubmit={handleRestock}>
                   <h3><HiRefresh></HiRefresh> Restock</h3>
                    <input name='quantity' className='quantity-input my-4 w-50 border border-2 border-dark' type="number" placeholder='Insert Quantity' />
                    <br />
                    <button type='submit' className='py-2 px-3 bg-info border-0 fs-4 text-white fw-medium'>Restock</button>
                   </form>
                </div>

                
           </div>
       </div>

    </div>
  )
}
