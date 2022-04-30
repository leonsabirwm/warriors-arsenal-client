import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

export const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
         <Navbar bg="black" variant="dark" expand="lg">
    <Container>
    <Navbar.Brand to='/'>Warrior's-Arsenal</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">
      <Link className='text-white text-decoration-none me-3' to='/'>Home</Link>
      <Link className='text-white text-decoration-none me-3' to='/myitems'>My Items</Link>
      <Link className='text-white text-decoration-none me-3' to='/manageinventory'>Manage Inventory</Link>
      <Link className='text-white text-decoration-none me-3' to='/additems'>Add Items</Link>
      <Link className='text-white text-decoration-none me-3' to='/blogs'>Blogs</Link>
     {user?<button onClick={()=>signOut(auth)} className='bg-black text-white border-0'>Log Out</button> :  <Link className='text-white text-decoration-none' to='/login'>Log In</Link>}
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>

    </div>
  )
}
