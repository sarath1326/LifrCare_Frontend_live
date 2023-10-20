

import React from 'react'
import "./Home.css"
import {useNavigate} from "react-router-dom"


function Homepage() {

  const navigate= useNavigate()
    
     return (
    
       <div>

       

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
