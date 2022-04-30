import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AddItems } from './components/AddItems/AddItems';
import { Blogs } from './components/Blogs/Blogs';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { SignUP } from './components/SignUP/SignUP';
import { ManageInventory } from './components/ManageInventory/ManageInventory';
import { MyItems } from './components/MyItems/MyItems';
import { UpdateItem } from './components/UpdateItem/UpdateItem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/inventory'element={<Home></Home>}></Route>
        <Route path='/inventory/:id'element={<UpdateItem></UpdateItem>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/additems' element={<AddItems></AddItems>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUP></SignUP>}></Route>
        <Route path='/manageinventory' element={<ManageInventory></ManageInventory>}></Route>
      </Routes>
    </div>
  );
}

export default App;
