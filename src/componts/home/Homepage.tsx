

import React from 'react'
import "./Home.css"
import { useNavigate } from "react-router-dom"
import Navebar from '../navbar/Navebar'
import { AiFillAlert } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Vishon from './Vishon';
import Speldep from './Speldep';
import Specality from './Specality';
import Footer from '../footer/Footer';


function Homepage() {

  const navigate = useNavigate()

  return (

    <div>

      <Navebar />

      <div className='main-home' >

        <div className='container'>

          <div className='home-emer-main' >

            <div className='home-emer-div' >

              <AiFillAlert className='home-emer-icon' />

            </div>

            <div>

              <span className='emer-title' > Emergency Care </span><br />
              <span className='emer-title' > 04662233445  </span>



            </div>





          </div>




          <div>

          </div>




          <button className='btn-appo-home' onClick={() => { navigate("/booking") }}>

            Book Appoinment

          </button>

          <div className='home-contact-div' >

            <a href='tel:+917592831937'>

              <div className='home-call-div' >

                <IoMdCall className='home-call-icon' />


              </div>


            </a>


            <a href='mailto: sarathsarath93366@gmail.com' >

              <div className='home-email-div'    >

                <MdOutlineMailOutline className='home-email-icon' />


              </div>


            </a>


            <a href='https://wa.me/7592831937' >
              <div className='home-what-div' >

                <FaWhatsapp className='home-what-icon' />


              </div>

            </a>


          </div>
        </div>

      </div>


      <Vishon />

      <Speldep />

      <Specality />

      <Footer />
















    </div>
  )
}

export default Homepage
