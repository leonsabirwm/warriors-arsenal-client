import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Slide.css'
import { useNavigate } from 'react-router-dom';
import { HiClipboardList } from "react-icons/hi";


export const Slide = () => {
    const navigate = useNavigate();
  return (
    <div className=''>
        <Carousel className='carousel'>
  <Carousel.Item>
   <div className='row'>
   <div className='col-lg-6 col-12'>
   <img
      className="d-block w-100"
      src="https://img.freepik.com/free-vector/logistics-industry-freight-profit-analyzing-supply-chain-analytics-transportation-providers-data-transportation-costs-optimization-concept-pinkish-coral-bluevector-isolated-illustration_335657-1765.jpg?t=st=1651827815~exp=1651828415~hmac=95372c0d5ef173281bcaa14a710a78df2c6bf734552daa20a534873a25cf2720&w=740"
      alt="First slide"
    />
   </div>
   <div className='col-lg-6 col-12 d-flex flex-column justify-content-center align-items-start px-5'>
      <h3 className="text-dark text-start">Keep Shipments Tracks</h3>
      <p className=' text-justify'>A shipment is all of the goods being shipped together at the same time.If regular shipments are made, an open-cargo policy can be used that insures the goods automatically when they are shipped.After that, food shipments to the port could begin in a matter of weeks.
      </p>
      <div className='d-flex justify-content-start'>
            <button className='mt-4 text-white p-3 btn-dark border border-0' onClick={()=>window.scrollTo({
  top: 1000,
  behavior: 'smooth'
})}><HiClipboardList></HiClipboardList>Invnetory</button>
        </div>

   </div>
   </div>

  </Carousel.Item>
 
  <Carousel.Item>
   <div className='row'>
   <div className='col-lg-6 col-12'>
   <img
      className="d-block w-100"
      src="https://img.freepik.com/free-vector/warehouse-staff-wearing-uniform-loading-parcel-box-checking-product-from-warehouse-delivery-logistic-storage-truck-transportation-industry-delivery-logistic-business-delivery_1150-60909.jpg?t=st=1651827946~exp=1651828546~hmac=72c8c047181e165f86dd45360dd1fa4a7f12821585c6106e7e6b0ad9ec769282&w=740"
      alt="First slide"
    />
   </div>
   <div className='col-lg-6 col-12 d-flex flex-column justify-content-center align-items-start px-5'>
      <h3 className="text-dark">Enlist Inventory Updates</h3>
      <p>Again, this seems like a no-brainer, but it goes beyond simply adding up sales at the end of the day. You should understand, on a daily basis, what items you sold and how many, and update your inventory totals. But beyond that, you???ll need to analyze this data. Do you know when certain items sell faster or drop off? Is it seasonal? Is there a specific day of the week when you sell certain items?
      </p>
      <div className='d-flex justify-content-start'>
            <button className='mt-4 text-white p-3 btn-dark border border-0' onClick={()=>window.scrollTo({
  top: 1000,
  behavior: 'smooth'
})}><HiClipboardList></HiClipboardList>Inventory</button>
        </div>
   </div>
   </div>

  </Carousel.Item>
 
  <Carousel.Item>
   <div className='row'>
   <div className='col-lg-6 col-12'>
   <img
      className="d-block w-100"
      src="https://img.freepik.com/free-vector/team-leader-managing-project_1262-21430.jpg?size=626&ext=jpg&ga=GA1.2.1617678331.1651665780"
      alt="First slide"
    />
   </div>
   <div className='col-lg-6 col-12 d-flex flex-column justify-content-center align-items-start px-5'>
      <h3 className="text-dark">Simple Management System</h3>
      <p>An inventory management system (or inventory system) is the process by which you track your goods throughout your entire supply chain, from purchasing to production to end sales. It governs how you approach inventory management for your business.
      </p>
      <div className='d-flex justify-content-start'>
            <button className='mt-4 text-white p-3 btn-dark border border-0' onClick={()=>navigate('/manageinventory')}><HiClipboardList></HiClipboardList> Manage Inventory</button>
        </div>
   </div>
   </div>

  </Carousel.Item>
 
</Carousel>
    </div>
  )
}
