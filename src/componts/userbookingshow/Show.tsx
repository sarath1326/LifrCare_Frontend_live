

import React from 'react'
import "./Show.css"
import Navebar from '../navbar/Navebar'
import axios from '../../Constant/Axiospage'
import { useState,useEffect } from 'react'
import {message} from "antd"
import { useNavigate } from 'react-router-dom'
import { Oval } from 'react-loader-spinner'

function Show() {

    const navigate=useNavigate()
   

    type getDatatype={

        _id:string 
        department: String
        patientname: String
        address: String
        age: String
        bystandername: String
        date: String
        doctername: String
        email: String
        mobile: any
        pyment: String
        gender: String
        fees: String
        marking: Boolean
        bookingid: number
        paystatus: string
        cancel:boolean

    }


     const [getdata,setgetdata]=useState<getDatatype[]>([])
     const [loding,setloding]=useState<boolean>(true)
     const[empty,setempty]=useState<boolean>(false)

     useEffect(()=>{

        axios("/userget_booking").then((respo)=>{

            const result=respo.data

            if(result.authfaild){

                  navigate("/login")
            
               }else if(result.flag){

               setgetdata(result.data)
               setloding(false)
            
               }else if(result.err){
  
                     
                   message.error("server err")

                      
               }else{

                   setloding(false)
                   setempty(true)
                   
               }

                
    }).catch(err=>{

         message.error("somthing worng")
    })
 




     },[])

      
      const cancel=(id:string,index:number)=>{



              axios.post("/user_cancel_booking",{data:id}).then((respo)=>{

                 const result=respo.data

                  if(result.authfaild){

                        navigate("/login")
                  
                    }else if(result.flag){

                        
                        getdata.splice(index,1)
                        
                        setgetdata([...getdata])

                         
                    }else{

                         message.error("server err")
                    }
                
                }).catch(err=>{

                      message.error("somthing worng")
                })
             
      }

   
     






    return (
        <div>

            <Navebar />

            <div className='show-main'>

                {
              
               empty ? 

               <p className='empty-show'  > NO Booking Found  </p>

               : 


                    loding ?
                    
                    
                    <div className='loding-div-show'>
                    
                    <Oval
                    height={40}
                    width={40}
                    color="#1A5D1A"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#1A5D1A"
                    strokeWidth={2}
                    strokeWidthSecondary={2}


                />

                </div>

                   





                    :

                    getdata.map((obj,index)=>(

                        obj.cancel ? 

                        null 

                        :

                        <div className='show-data-box-main'>

                        <div className='data-box'>
    
                            <span className='data-span'> Booking ID:</span><span> {obj.bookingid}</span>     <br />
    
                            <span className='data-span'> Patient Name : </span><span>{obj.patientname} </span>  <br />
    
                            <span className='data-span'> Date:</span><span> {obj.date} </span>  <br />
    
                            <span className='data-span'> Doctor: </span><span> {obj.doctername}</span>  <br />
    
                            <span className='data-span'> Department:  </span><span> {obj.department}  </span> <br />
                        </div>
    
                        <div className='btn-box'>
                            <button className='can-btn' onClick={()=>{cancel(obj._id,index)}} > Cancel </button> <br />
                            <button className='re-btn'> Reshadule </button>
                        </div>
                    </div>



                    ))

               

                    


                }


               





















            </div>





        </div>
    )
}

export default Show
