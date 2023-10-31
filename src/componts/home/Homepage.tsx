

import React from 'react'
import "./Home.css"
import {useNavigate} from "react-router-dom"
import Navebar from '../navbar/Navebar'


function Homepage() {

  const navigate= useNavigate()
    
     return (
    
       <div>

       <Navebar />

        <div className='main-home' >

            <div className='container'>

            

            
           <div>
            
           </div>

          
         

          <button className='btn-appo-home' onClick={()=>{navigate("/booking")}}> 

            Book Appoinment

          </button>
          




         </div>


        </div>


        









      
    </div>
  )
}

export default Homepage
