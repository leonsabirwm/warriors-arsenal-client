import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const UpdateItem = () => {
    const id = useParams().id;
    const [item,setItem] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/myitem/${id}`)
        .then(res => res.json())
        .then(data =>setItem(data));
    },[])
    
  return (
    <div>
        <h2>update your product here :{item.price}</h2>

    </div>
  )
}
