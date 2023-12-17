

import React from 'react'
import "./Chatpyment.css"
import Navebar from '../../navbar/Navebar'
import axios from "../../../Constant/Axiospage"
import { useNavigate } from 'react-router-dom'
import { online_consult_onlinePayment } from "../../Razorpya/Chatpyment"
import { message } from "antd"
import { useState,useEffect } from 'react'
import { Oval } from 'react-loader-spinner'


function Chatpyment() {


    const navigate = useNavigate()

    const [flag, setflag] = useState(false)
    const [loding, setloding] = useState<boolean>(true)


    useEffect(()=>{


        axios("/videocall_control_check").then((respo)=>{

            const result=respo.data

            if(result.flag){

                setloding(false)
                setflag(true)
            
            }else if(result.err){

                  message.error("server err")
            
                }else{

                    setloding(false)


            }

              
        }).catch(err=>{

            message.error("somthing worng ")

              
        })


    },[])









    const pyment = () => {


        axios.post("/online_pyment", { fee: 100 }).then((res) => {

            const result = res.data


            if (result.authfaild) {

                navigate("/login")

            } else if (result.razor) {

                online_consult_onlinePayment(result.razor_oderid, (pyment: any, order: any) => {

                    const data = {
                        pyment,
                        order
                    }


                    axios.post("/pyment_verification", data).then((respo) => {

                        const result = respo.data

                        if (result.flag) {

                            navigate('/idroom')

                        } else {

                            message.error(" server err")

                        }

                    }).catch(err => {

                        message.error("somthing worng !")


                    })








                })


            }







        }).catch(err => {


        })


    }




    return (
        <div>

            <Navebar />

            {
                flag ?

                    <p className='chat-pyment-title' > Online Consultation Pyment Process   </p>

                    : null



            }



            <div className='chat-pyment-main'  >

                <div className='chat-pyment-pyment-box-main' >

                    {

                        loding ?

                            <div className='chat-pyment-spin' >
                            <Oval
                                height={40}
                                width={40}
                                color="#004225"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel='oval-loading'
                                secondaryColor="#637E76"
                                strokeWidth={2}
                                strokeWidthSecondary={2}


                            />

                            </div>





                            :

                            flag ?



                            <>

                                <p className='chat-pyment-pyment-box-main-title' > Available Video And Chat Intraction With Doctor   </p>

                                <p className='cht-pyment-box-fee' > Doctor Consultation Fee is  : 100 RS  </p>

                                <button className='cht-pyment-btn' onClick={pyment}  > Pay & Start Call  </button>


                            </>

                            :

                            <>

                            <p className='cht-pyment-msg' > Doctors not available this time. pleace try later  </p>

                            <div className='cht-pyment-img-div'  >

                                <img className='cht-img' src='../hospitallogo.jpeg'  />


                            </div>

                            </>




                    }




                </div>

            </div>









        </div>
    )
}

export default Chatpyment
