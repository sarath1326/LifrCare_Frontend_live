

import React from 'react'
import "./OPmanage.css"
import Navbar_mang from '../Navbar/Navbar_mang'
import Sidebar from "../Sidebar/Sidebar"
import Dropdown from 'react-bootstrap/Dropdown';
import New_dep from './New_dep';
import { useState } from 'react';
import Adddoctor from './addDoctor/Adddoctor';





function OPmanage() {

    const [pop, setpop] = useState<boolean>(false);
    const [addDoctor,setaddDoctor]=useState<boolean>(false);


    return (
        <div>

            <Navbar_mang />

            <div className='mang-home-main'>

                <Sidebar />

                <div className='mang-home-iner-main'>

                    <Dropdown className='mang-op-drop'>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            OP Booking Manage
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1" onClick={()=>{setpop(true)}}  > Add new Department </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Edit data</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" onClick={()=>{setaddDoctor(true)}}    >Add Doctor</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>



                   {

                    pop ? 

                    <New_dep data={()=>{setpop(false)}}  />

                    :  null


                   }


                   {

                    addDoctor ? 

                    <Adddoctor func={()=>{setaddDoctor(false)}}   />

                    : null


                   }



























                </div>


            </div>








        </div>
    )
}

export default OPmanage

