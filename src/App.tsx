

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import Navebar from './componts/navbar/Navebar';
import Homepage from './componts/home/Homepage';
import Booking from './componts/booking/Booking';
import Fixapoinment from './componts/fixApoinment/Fixapoinment';
import Login from './componts/login/Login';
import Signup from './componts/Signup/Signup';
import Show from './componts/userbookingshow/Show';
import IDroom from './componts/videochat/idRoom/IDroom';
import Chatroom from './componts/videochat/chatRoom/Chatroom';
import Chatpyment from './componts/videochat/chatpyment/Chatpyment';
import Department from './componts/department/Department';
import Doctor from './componts/doctor/Doctor';
import Levepage from './componts/videochat/levepage/Levepage';
import Contact from './componts/contact/Contact';






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

      <Route element={<Chatpyment />} path='/chatpyment' />

      <Route element={<IDroom />} path='/idroom' />

      <Route element={<Chatroom />} path='/chatroom' />

      <Route element={<Department />} path='/departments' />

      <Route element={<Doctor />} path='/doctor' />

      <Route element={<Levepage />} path='/levepage' />

      <Route element={<Contact />} path='/contact'  />



    






    </Routes>



      







      
    </div>
  )
}

export default App



