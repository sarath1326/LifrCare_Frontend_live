

import React from 'react'
import "./Doctor.css"
import Navebar from '../navbar/Navebar'
import Footer from '../footer/Footer'
import axios from "../../Constant/Axiospage"
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Doctor() {

    type datatype = {

        _id: string
        department: string

    }

    const [getdata, setgetdata] = useState<datatype[]>([])
    const [doctor, setdoctor] = useState<string[]>([])

    const navigate = useNavigate()

    useEffect(() => {

        axios("/getalldepo").then((respo) => {

            const result = respo.data

            if (result.authfaild) {

                navigate("/login")

            } else if (result.flag) {


                setgetdata(result.data)

            } else {

                console.log("err")

            }



        }).catch(err => {


        })




    }, [])



    const find = (id: string) => {

        const res: any = getdata.find((obj) => obj._id === id)

        setdoctor(res.doctors)

    }






    return (
        <div>

            <div className='doct-main' >
                <Navebar />

                <div className=' container  doct-iner-box'  >

                    <div className='doct-selt-box' >

                        <select className='doct-selet' onChange={(e) => { find(e.target.value) }} >

                            <option> Select Department </option>


                            {

                                getdata.map((obj) => (

                                    <option value={obj._id}> {obj.department}  </option>



                                ))



                            }


                        </select>

                    </div>


                    <div className='doct-doc-main-box' >

                        {

                            doctor.map((obj) => (

                                <div className='doct-name-div' >

                                    <p className='doct-name' > {obj}  </p>
                                    
                                     </div>



                            ))



                        }




                    </div>







                </div>









            </div>

            <Footer />






        </div>
    )
}

export default Doctor
