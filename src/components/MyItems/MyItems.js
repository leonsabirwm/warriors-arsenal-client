import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import { auth } from '../../firebase.init';
import { MyItem } from '../MyItem/MyItem';
import { Loading } from './../Loading/Loading';

export const MyItems = () => {
  const [takeReload,setTakeReload] = useState(false);
  const [myEmail,setMyEmail] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const [myitems,setmyItems] = useState([]);
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
  
   fetch(`http://localhost:5000/myitems?email=${myEmail}`)
  .then(res => res.json())
  .then(data => setmyItems(data))
  },[takeReload]);

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

        const restItems = myitems.filter(item =>item._id !== id)
        setmyItems(restItems);
      } else {
        swal("Your selected item is not removed !!!");
      }
    });
   
  }
  return (
    <div>
     {
       myitems.length < 1 ? <Loading></Loading> : ""
     }
      <h3 className='mt-4 text-center'>My Items</h3>
        <div className='row mt-3 d-flex justify-content-center align-items-center mx-auto'>
        
         {
           myitems.map(item => <MyItem handler={handleDelete} key={item._id} item={item}></MyItem>)
         }
        </div>

    </div>
  )
}
