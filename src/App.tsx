

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import Navebar from './componts/navbar/Navebar';
import Homepage from './componts/home/Homepage';
import Booking from './componts/booking/Booking';
import Fixapoinment from './componts/fixApoinment/Fixapoinment';
import Home_mang from './Management/Home/Home_mang';
import OPmanage from './Management/OPmanage/OPmanage';





function App() {
  return (
    <div>

     {/* <Navebar /> */}

    <Routes>

      <Route element={<Homepage />} path='/' />
      
      <Route element={<Booking />} path='/booking' />

      <Route element={<Fixapoinment />} path='/fixapoi' />



      {/* management side */}


      <Route element={<Home_mang />} path='/homemange'/>

      <Route element={<OPmanage />}  path='/opmange'    />






    </Routes>



      







      
    </div>
  )
}

export default App



