import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { auth } from '../../firebase.init';
import { MyItem } from '../MyItem/MyItem';

export const MyItems = () => {
  const [takeReload,setTakeReload] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [myitems,setmyItems] = useState([]);
  console.log(user);
  useEffect(()=>{
    fetch(`http://localhost:5000/myitems?email=${user.email}`)
    .then(res => res.json())
    .then(data => setmyItems(data))
  },[takeReload]);

  const handleDelete = (id)=>{
    axios.delete(`http://localhost:5000/items/${id}`)
    .then(function (response) {
      console.log(response);
      toast.success('product deleted',{id:'fr5'})
      })
      .catch(function (error) {
          console.log(error);
      });
    setTakeReload(!takeReload);
  }
  return (
    <div>
        <div className='row mt-5 d-flex justify-content-center align-items-center mx-auto'>
         {
           myitems.map(item => <MyItem handler={handleDelete} key={item._id} item={item}></MyItem>)
         }
        </div>

    </div>
  )
}
