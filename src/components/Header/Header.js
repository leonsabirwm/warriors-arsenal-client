import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Toaster } from 'react-hot-toast';
import LoadingBar from 'react-top-loading-bar';
import { BarContext } from './../../App';
import { useContext} from 'react';


export const Header = () => {
  const [user] = useAuthState(auth);
  const  [progress,setProgress] = useContext(BarContext);
  return (
    <div>
         <Navbar bg="black" variant="dark" expand="lg">
    <Container>
    <Navbar.Brand to='/inventory'>Warrior's-Arsenal</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">
      <Link className='text-white text-decoration-none me-3' to='/inventory'>Home</Link>
      <Link className='text-white text-decoration-none me-3' to='/myitems'>My Items</Link>
     {
       user? 
       <Link className='text-white text-decoration-none me-3' to='/manageinventory'>Manage Inventory</Link>
      
       :''
     }
     {
       user? 
       <Link className='text-white text-decoration-none me-3' to='/additems'>Add Items</Link>
      
       :''
     }
      <Link className='text-white text-decoration-none me-2' to='/blogs'>Blogs</Link>
     {user?<button onClick={()=>signOut(auth)} className='bg-black text-white border-0'><span className='fw-light'>Log Out</span></button> :  <Link className='text-white text-decoration-none' to='/login'>Log In</Link>}
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
    <Toaster></Toaster>
    <LoadingBar color='#f11946' progress={progress}
    onLoaderFinished={() => setProgress(0)} />
    </div>
  )
}
