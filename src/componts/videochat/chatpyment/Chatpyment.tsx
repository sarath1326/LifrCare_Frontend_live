

import React from 'react'
import "./Chatpyment.css"
import Navebar from '../../navbar/Navebar'
import axios from "../../../Constant/Axiospage"
import { useNavigate } from 'react-router-dom'
import {online_consult_onlinePayment} from "../../Razorpya/Chatpyment"
import {message} from "antd"


function Chatpyment() {


    const navigate=useNavigate()

    
    const pyment=()=>{


    axios.post("/online_pyment",{fee:100}).then((res)=>{

        const result=res.data


        if(result.authfaild){

           navigate("/login")

        }else if(result.razor){

            online_consult_onlinePayment(result.razor_oderid,(pyment:any,order:any)=>{

                const data = {
                    pyment,
                    order
                }


                axios.post("/pyment_verification",data).then((respo)=>{

                    const result=respo.data

                    if(result.flag){

                          navigate('/idroom')
                    
                        }else{

                             message.error(" server err")

                        }
                    
                    }).catch(err=>{

                   message.error("somthing worng !")
                  
                      
                })


                

                  
                 

                  
            })

              
        }

        

       
        

         
    }).catch(err=>{

           
    })

      
 }




    return (
        <div>

            <Navebar />

            <p className='chat-pyment-title' > Online Consultation Pyment Process   </p>

            <div className='chat-pyment-main'  >

                <div className='chat-pyment-pyment-box-main' >

                    <p className='chat-pyment-pyment-box-main-title' > Availabele Video And Chat Intraction With Doctor   </p>

                    <p className='cht-pyment-box-fee' > Doctor Consultation Fee is  : 100 RS  </p>





                    <button className='cht-pyment-btn' onClick={pyment}  > Pay Start Call  </button>


                </div>





            </div>









        </div>
    )
}

export default Chatpyment
