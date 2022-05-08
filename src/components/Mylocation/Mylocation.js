import React from 'react'
import './Mylocation.css'

export const Mylocation = () => {
  return (
    <div className='d-flex flex-lg-row flex-column justify-content-evenly align-items-center my-map'>
        <div className='d-inline-block p-4 mb-5 shadow'>
            <h2>Find Us On</h2>
            <h2>Google Map</h2>
        </div>
        <div className="mapouter border rounded border-dark border-2"><div className="gmap_canvas"><iframe width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=golkerhat&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><a href="https://123movies-a.com"></a><br/></div>
        </div>
    </div>
  )
}
