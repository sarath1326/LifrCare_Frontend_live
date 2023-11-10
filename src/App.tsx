

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import Navebar from './componts/navbar/Navebar';
import Homepage from './componts/home/Homepage';
import Booking from './componts/booking/Booking';
import Fixapoinment from './componts/fixApoinment/Fixapoinment';
import Home_mang from './Management/Home/Home_mang';
import OPmanage from './Management/OPmanage/OPmanage';
import Login from './componts/login/Login';
import Signup from './componts/Signup/Signup';
import Show from './componts/userbookingshow/Show';





function App() {
  return (
    <div>

     {/* <Navebar /> */}

    <Routes>

      <Route element={<Homepage />} path='/' />
      
      <Route element={<Booking />} path='/booking' />

      <Route element={<Fixapoinment />} path='/fixapoi' />

      <Route element={<Login />} path='/login' />

      <Route element={<Signup />} path='/signup' />

      <Route element={<Show />} path='/show' />



      {/* management side */}


      <Route element={<Home_mang />} path='/homemange'/>

      <Route element={<OPmanage />}  path='/opmange'    />






    </Routes>



      







      
    </div>
  )
}

export default App



