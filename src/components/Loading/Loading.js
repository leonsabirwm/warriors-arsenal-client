import React from 'react'

export const Loading = () => {
  return (
    <div className='d-flex mt-5 align-items-center justify-content-center'>
<div className="spinner-grow text-dark" role="status">
  <span className="sr-only"></span>
</div>
<div className="spinner-grow text-dark mx-5" role="status">
  <span className="sr-only"></span>
</div>
<div className="spinner-grow text-dark" role="status">
  <span className="sr-only"></span>
</div>
    </div>
  )
}
