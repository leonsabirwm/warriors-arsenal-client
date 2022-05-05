import React from 'react'
import { FaPeriscope } from "react-icons/fa";
import { HiOutlineMail ,HiPhone} from "react-icons/hi";

export const Footer = () => {
  return (
    <div className='row bg-white my-5 mx-0 d-flex justify-content-center align-items-center'>
        <div className='col-12 col-lg-4 pt-5 d-flex flex-column px-5 align-items-center'>
            <div className=''>
                <h3>Warrior's Arsenal</h3>
            </div>
            <p className='text-justify'>
               Warrior's Arsenal is an inventory managing website that authorizes users and then reveals it's features to them.It's useses of JWT makes it more secure.User can add products and manage stock of those products easily and rapidly.
            </p>
            <div>
                <p><FaPeriscope></FaPeriscope> Grand Ave, Coconut Grove, Merrick Way, FL 12345</p>
                <p><HiOutlineMail></HiOutlineMail> info@warriors-arsenal.com</p>
                <p><HiPhone></HiPhone>23-456-7890</p>
            </div>

        </div>
        <div className='col-12 p-0 my-4 col-lg-4 d-flex justify-content-center'>
        <div>
        <h4>Quick Links</h4>
        <p>Warehouse Locations</p>
        <p>Questions</p>
        <p>Privacy Policy</p>
        <p>FAQs</p>
        <p>Help and Support</p>
        </div>
        
        </div>
        <div className='col-12 col-lg-4 p-0'>
            
            <div className='d-flex mx-auto flex-column align-items-left w-50'>
            <h4>Get In Touch</h4>
                <input className='border border-dark' type="text" placeholder='Name'/>
                <input className='border border-dark my-3' type="text" placeholder='Email'/>
                <textarea className='bg-light border border-dark' type="text" placeholder='Your Message'/>
                <button className='mt-3 bg-dark text-white py-2 border border-0'>Send Message</button>
            </div>
        </div>
       


    </div>
  )
}
