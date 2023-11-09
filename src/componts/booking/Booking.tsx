

import React from 'react'
import "./Booking.css"
import Navebar from '../navbar/Navebar'
import  {useState,useEffect} from "react"
import axios from "../../Constant/Axiospage"
import { useNavigate } from 'react-router-dom'
import  {message} from  'antd'



function Booking() {

  const navigate=useNavigate();

  

  type datatype = {

    availabel: string
    department: string
    doctors: string[]
    time: string
    _id: string,
    fees:string
}


    
  const [show,setshow]=useState(false)
  const [opdata,setopdata]=useState<datatype>()
  const [alldepo,setalldepo]=useState<datatype[]>([])
  const [doctor,setdoctor]=useState<string[]>()
 

  


      
     useEffect(()=>{

       axios("/getalldepo").then((respo)=>{

         let result=respo.data;

         if(result.authfaild){

             navigate('/login');
             return ;
         }

         if(result.flag){

          setalldepo(result.data);
            
         

         }else{

           message.error("server err ")

         }
        
        }).catch(err=>{

           message.error("somthing worng... check your connection ")
        })

     },[])


    



  const check=(dep:string):void=>{


          let res=alldepo?.find(obj=>obj.department===dep)

            console.log("filterdata",res)
         
              setopdata(res)
              setdoctor(res?.doctors)
              setshow(true)
              
        }

        
        const bookapoinment=()=>{

            navigate("/fixapoi",{state:opdata})
          
          }


  return (

    <div>
      <Navebar />
    <div className='     bkd-main'>

       <div className='container  bkd-chec-main'>

        <div className='bkd-checkbox'>
            <p className='bkd-checkbox-title'> Check OP Availability</p>

            <select className='bkd-select'  onChange={(e)=>{check(e.target.value)}}  >

                <option > Select Your Deprtment</option>
                {
                  alldepo?.map((obj)=>(
                     
                    <option value={obj.department} > {obj.department}</option>

                  ))
                }
                </select>



                <div className='bkd-availabel-box'>

                    {

                        show ?  
                        
                        <>

                        <span  className='bkt-availabel-box-hed'> Department:</span><span className='bkd-data'> {opdata?.department}</span><br/>

                        <span  className='bkt-availabel-box-hed'>Availabil Day:</span><span className='bkd-data'> {opdata?.availabel}</span><br/>
    
                        <span  className='bkt-availabel-box-hed'>Time:</span><span className='bkd-data'> {opdata?.time}</span><br/>

                        <span className='bkt-availabel-box-hed'> Availabel Doctors :  </span> <br/>

                            
                       
                        {

                       
                          doctor?.map((obj)=>(

                          <>
                          
                           
                          
                          <span className='bkt-availabel-doctors'>{obj} </span><br/>  </>

                          ))
                       
                       }
    
                    <span  className='bkt-availabel-box-hed'>consultation fees:</span><span className='bkd-data'> {opdata?.fees}</span><br/>
    
    
                        <button onClick={bookapoinment}  className='bkd-btn'> Book Apoinment </button>

                        


                        </>

                        : null
                    }
                    
                    </div>



                    

               





        </div>








       </div>

    

      







      
    </div>
    </div>
  )
}

export default Booking
