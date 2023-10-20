

import React from 'react'
import "./Booking.css"
import  {useState} from "react"
import axios from "../../Constant/Axiospage"
import { useNavigate } from 'react-router-dom'



function Booking() {

  const navigate=useNavigate();

  type resultobj={
    
    _id:any
    department:string
    availabel:string
    time:string
  
  }
    
  const [show,setshow]=useState(false)
  const [opdata,setopdata]=useState<resultobj>()

  const check=(dep:string):void=>{


     axios("/op_availabel_check?dep="+dep).then((respo)=>{

      
      const result=respo.data

      if(result.flag){

           setopdata(result.data)
           setshow(true)


      }else if(result.err){

        console.log("server err")

      }else{

        console.log("data not found")

      }
    
    }).catch(err=>{

      console.log("server err")

     })
         

  }


  return (
    <div className='     bkd-main'>

       <div className='container  bkd-chec-main'>

        <div className='bkd-checkbox'>
            <p className='bkd-checkbox-title'> Check OP Availability</p>

            <select className='bkd-select'  onChange={(e)=>{check(e.target.value)}}  >

                <option > Select Your Deprtment</option>
                <option  value={"genaral medicine"} > Genaral Medicine</option>
                <option value={"cardiolagi"}> Cardiolagy</option>
                <option value={"pediatrition"}> Pediatrition</option>
                
                </select>



                <div className='bkd-availabel-box'>

                    {

                        show ?  
                        
                        <>

                        <span  className='bkt-availabel-box-hed'> Department:</span><span className='bkd-data'> {opdata?.department}</span><br/>

                        <span  className='bkt-availabel-box-hed'>Availabil Day:</span><span className='bkd-data'> {opdata?.availabel}</span><br/>
    
                        <span  className='bkt-availabel-box-hed'>Time:</span><span className='bkd-data'> {opdata?.time}</span><br/>
    
    
    
                        <button onClick={()=>{navigate("/fixapoi")}}  className='bkd-btn'> Book Apoinment </button>

                        


                        </>

                        : <p> helooo </p>
                    }
                    
                    </div>



                    

               





        </div>








       </div>

    

      







      
    </div>
  )
}

export default Booking
