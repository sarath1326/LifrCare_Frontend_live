

import React from 'react'
import "./Footer.css"
import { AiFillAlert } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <div>

            <div className='footer-main' >

                <div className='container footer-iner-box ' >

                    <div className='footer-top-box' >

                        <div>

                            <h3 className='title-top-nav'> Life Care </h3>
                            <span className='footer-sub'> Hospital and Resurch Center </span>

                        </div>

                        <div className='footer-emer-main' >

                            <div className='footer-emer-div' >

                                <AiFillAlert className='footer-emer-icon' />

                            </div>

                            <div>

                                <span className='footer-emer-title' > Emergency Care </span><br />
                                <span className='footer-emer-title' > 04662233445  </span>
                            </div>
                        </div>




                        <div className='footer-emer-main' >

                            <div className='footer-emer-div' >

                                <IoMdCall className='footer-emer-icon' />

                            </div>

                            <div>

                                <span className='footer-emer-title' > Enquire </span><br />
                                <span className='footer-emer-title' > 7592831937  </span>



                            </div>





                        </div>


                        <div className='footer-soci' >

                            <FaFacebookF className='footer-soci-icon' />


                        </div>

                        <div className='footer-soci' >

                            <IoLogoTwitter className='footer-soci-icon' />


                        </div>

                        <div className='footer-soci' >

                            <FaInstagram className='footer-soci-icon' />


                        </div>
                        
                        
                        
                        
                        
                        </div>


                        <button className='footer-btn'  > Book Appoinment  </button> <br/>

                        <button className='footer-btn'  > Online Consultation    </button>


                        <p className='footer-copy' > @ 2023 Life Care, All Rights Reserved.  </p>


                        









                </div>



            </div>






        </div>
    )
}

export default Footer
