import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import { BarContext } from '../../App';
import { auth } from '../../firebase.init';
import { MyItem } from '../MyItem/MyItem';
import { Noitems } from './../Noitems/Noitems';

export const MyItems = () => {
  const [takeReload,setTakeReload] = useState(false);
  const [myEmail,setMyEmail] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const [myitems,setmyItems] = useState([]);
  const  [progress,setProgress] = useContext(BarContext);
  const [noitem,setNoitem] = useState(false)

  console.log(user);
  console.log(myEmail);

  useEffect(()=>{
    setTimeout(() => {
      if(user){
        setMyEmail(user.email);
        setTakeReload(!takeReload)
     }
    }, 1000);
  },[user])

  useEffect(()=>{
    setProgress(10)
   fetch(`https://obscure-waters-67643.herokuapp.com/myitems?email=${user.email}`)
  .then(res => res.json())
  .then(data => {
    setmyItems(data)
    if(!data.length){
      setNoitem(true)
    }
  })
  setProgress(100);
  },[takeReload]);

  // setTimeout(()=>{
  //   if(!myitems.length){
  //     console.log(myitems.length)
  //     setNoitem(true)
  //   }
  // },4000)
 
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
          
          const restItems = myitems.filter(item =>item._id !== id)
          setmyItems(restItems);
          if(myitems.length < 2){
            setNoitem(true)
          } ;
      } else {
        swal("Your selected item is not removed !!!");
      }
    });
   
  }
  console.log(noitem);

  return (
    <div className=''>
      <h3 className='mt-4 text-nowrap mx-auto w-25 text-center shadow-sm p-4'>My Items</h3>

     {
       noitem ? <Noitems></Noitems> : ''
     }
        <div className='row mt-3 d-flex justify-content-center align-items-center mx-auto'>
        
         {
           myitems.map(item => <MyItem handler={handleDelete} key={item._id} item={item}></MyItem>)
         }
        </div>

    </div>
  )
}
