import React from 'react'
import { HiEmojiSad } from "react-icons/hi";
import './Noitem.css'

export const Noitems = () => {
  return (
    <div className='my-5 p-5 shadow text-danger container mx-auto noitem-card'>
        <div className='d-flex justify-content-center align-items-center shadow p-4'>
            <h1 className='me-3 fs-1'><HiEmojiSad ></HiEmojiSad></h1>
            <div className='d-flex flex-column align-items-center justify-content-center'><h1 className='text-nowrap'>You 've no item</h1>&nbsp;&nbsp;<h1 className='text-nowrap'>to display</h1></div>
        </div>
    </div>
  )
}
