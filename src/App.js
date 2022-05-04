import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AddItems } from './components/AddItems/AddItems';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { SignUP } from './components/SignUP/SignUP';
import { ManageInventory } from './components/ManageInventory/ManageInventory';
import { MyItems } from './components/MyItems/MyItems';
import { UpdateItem } from './components/UpdateItem/UpdateItem';
import { RequireAuth } from './components/RequireAuth/RequireAuth';
import { createContext, useState } from 'react';
import { NotFound } from './components/NotFound/NotFound';
import Blogs from './components/Blogs/Blogs';

export const BarContext = createContext();
function App() {
  const [progress,setProgress] = useState(0);
  return (
    <div className="App bg-light">
     <BarContext.Provider value={[progress,setProgress]}>
     <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/inventory/:id'element={
          <RequireAuth>
            <UpdateItem></UpdateItem>
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/additems' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUP></SignUP>}></Route>
        <Route path='/manageinventory' element={<ManageInventory></ManageInventory>}></Route>
      
      <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

     </BarContext.Provider>
    </div>
  );
}

export default App;
