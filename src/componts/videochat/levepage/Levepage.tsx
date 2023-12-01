


import React from 'react'
import "./Levepage.css"
import Navebar from '../../navbar/Navebar'
import { useEffect ,useState , useContext } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

import {SocketContext} from "../contextApi/Socket"

function Levepage() {


     const {flag,setflag}=useContext(SocketContext)
     const navigate=useNavigate()

      useEffect(()=>{


        if(flag){

            window.location.reload()

          setflag(false)


        }

        Swal.fire({
            title: "Call Ended",
            color:"red",
            icon:"error",
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: "Home",
            denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {

                navigate("/")
            
            } else if (result.isDenied) {
               
                Swal.fire("Changes are not saved", "", "info");
            }
        });

        
             
      },[])
 



  return (
    <div>

        <div className='leve-main'  >

            <Navebar />

          <div className='leve-inner' >





          </div>





        </div>



      
    </div>
  )
}

export default Levepage
