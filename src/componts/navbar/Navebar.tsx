


import React from 'react'
import "./Navbar.css"
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react'


function Navebar() {

   const [tongelbox,settongelbox]=useState <boolean> (false)


    return (
        <div>

            <div className='top-nav-main'>


                <div className='img-box'>
                    <img className='logo-img' src='../hospitallogo.jpeg' alt='loding...' />
                </div>

                <div>

                    <h3 className='title-top-nav'> Life Care </h3>
                    <span className='sub-title-top-nav'> Hospital and Resurch Center </span>

                </div>

            </div>

            <div className='second-navbr-main'>

                <div className='container  option-box-main'>

                    <p className='second-options'> Home </p>

                    <p className='second-options'> Departments </p>

                    <p className='second-options'> Doctores</p>

                    <p className='second-options'> Book Appoinment </p>

                    <p className='second-options'> Online Consultation </p>

                    <p className='second-options'> Other Services</p>

                    <p className='second-options'> Contacts </p>

                    <p className='second-options'> Account </p>

                </div>

                <div className='three-bar'>


                    <RxHamburgerMenu className='thre-bar-tongil' onClick={()=>{settongelbox(!tongelbox)}}    />


                </div>

                {   tongelbox ? 

                <>

                <div className='togil-box-main'>

                    <div className='container'>

                    <p className='second-options'> Account </p>

                        <p className='second-options'> Home </p>

                        <p className='second-options'> Departments </p>

                        <p className='second-options'> Doctores</p>

                        <p className='second-options'> Book Appoinment </p>

                        <p className='second-options'> Online Consultation </p>

                        <p className='second-options'> Other Services</p>

                        <p className='second-options'> Contacts </p>
                        
                        </div>





                </div>

                
                </>

                : null


                }


                







            </div>



        </div>
    )
}

export default Navebar
