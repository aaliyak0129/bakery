import React from 'react'
import Home from './Pages/Home'; 

import UserList from './Pages/Admin/UserList'; // <-- new
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Layout';
import Showcart from './Components/Showcart';
import SignUp from './Pages/Signup';
import Login from './Pages/Login';
import OrderList from './Pages/Admin/OrderList';
import AdminPanel from './Pages/Admin/AdminPanel';
import AdminLogin from './Pages/Admin/AdminLogin';
const App=()=>{
  return (
    <>   
 


<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} /> 
      <Route path='/Showcart' element={<Showcart/>} />
          <Route path='/Signup' element={<SignUp/>} />
                    <Route path="/Login" element={<Login/>} />

<Route path="/admin/orders" element={<OrderList />} />
 <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/panel" element={<AdminPanel />} />
  </Route>
    
</Routes>

  </>

  )
}
export default App
