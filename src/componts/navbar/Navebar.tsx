


import React from 'react'
import "./Navbar.css"
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { VscAccount } from "react-icons/vsc"
import { useNavigate } from 'react-router-dom';
import axios from "../../Constant/Axiospage";
import { message } from "antd"
import { RxCross1 } from "react-icons/rx";



function Navebar() {

    axios.defaults.withCredentials = true;






    const [tongelbox, settongelbox] = useState<boolean>(false);
    const [userName, setuserName] = useState<string>()
    const [flag, setflage] = useState<boolean>(true)

    const navigate = useNavigate();


    useEffect(() => {


        axios("/userdata").then((respo) => {

            const result = respo.data;

            if (result.flag) {

                const { name } = result.data

                setuserName(name);
                setflage(false)

            } else {


                setflage(true);


            }

        }).catch(err => {

            message.error("somthing worng...! check your connection.");


        });



    }, [])


    const logout = () => {

        axios.get("/userlogout").then(() => {

            navigate(0);

        }).catch(err => {

            message.error("server error");


        });

    }



    







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

                    <p className='second-options' onClick={() => { navigate("/") }}   > Home </p>

                    <p className='second-options' onClick={()=>{navigate("/departments")}} > Departments </p>

                    <p className='second-options' onClick={()=>{navigate("/doctor")}}  > Doctores</p>

                    <p className='second-options'> Book Appoinment </p>

                    <p className='second-options' onClick={()=>{navigate("/chatpyment")}} > Online Consultation </p>

                    <p className='second-options'> Other Services</p>

                    <p className='second-options'> Contacts </p>

                    <Dropdown>
                        <Dropdown.Toggle className='nav-drop-btn' variant="success" id="dropdown-basic">
                            Account
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <div className='nav-deop-div'>
                                <div className='nav-drop-icon-box'>
                                    <VscAccount className='nav-acc' />
                                    <span> {userName} </span>
                                </div>

                                {
                                    flag ?
                                        <>
                                            <button onClick={() => { navigate("/login") }} className='nav-log-btn'> Login </button>
                                            <button className='nav-log-btn'> Signup  </button>

                                        </>
                                        :
                                        <button onClick={logout} className='nav-log-btn'> Logout </button>

                                }
                                <button onClick={() => { navigate("/show") }} className='nav-you-book-btn'>  Your Bookings   </button>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>


                </div>

                <div className='three-bar'>

                      {
                         tongelbox ?

                         <RxCross1 className='thre-bar-tongil' onClick={()=>{settongelbox(false)}} />

                         : 

                    <RxHamburgerMenu className='thre-bar-tongil' onClick={() => { settongelbox(true) }} />

                      }


                </div>

                { tongelbox ? 

                    <>

                        <div className='togil-box-main'>

                            <div className='container'>

                                {/* <p className='second-options'> Account </p> */}

                                <Dropdown>
                        <Dropdown.Toggle className='nav-drop-btn' variant="success" id="dropdown-basic">
                            Account
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <div className='nav-deop-div'>
                                <div className='nav-drop-icon-box'>
                                    <VscAccount className='nav-acc' />
                                    <span> {userName} </span>
                                </div>

                                {
                                    flag ?
                                        <>
                                            <button onClick={() => { navigate("/login") }} className='nav-log-btn'> Login </button>
                                            <button className='nav-log-btn'> Signup  </button>

                                        </>
                                        :
                                        <button onClick={logout} className='nav-log-btn'> Logout </button>

                                }
                                <button onClick={() => { navigate("/show") }} className='nav-you-book-btn'>  Your Bookings   </button>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>

                                <p className='second-options' onClick={() => { navigate("/") }}  > Home </p>

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
