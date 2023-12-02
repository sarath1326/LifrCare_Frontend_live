

import React from 'react'
import "./Fixapoinment.css"
import Navebar from '../navbar/Navebar'

import { useFormik } from 'formik'
import { validationSchema } from "./Fixapoinmentschema"
import { message } from "antd"
import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from "../../Constant/Axiospage"
import Swal from 'sweetalert2';
import { onlinePayment } from "../Razorpya/pyment"
import { Oval } from 'react-loader-spinner'






function Fixapoinment() {


    type select_department_type = {

        availabel: string
        department: string
        doctors: string[]
        time: string
        _id: string
        fees: string
    }


    const [finddepo, setfinddepo] = useState<select_department_type>();
    const [doctor, setdoctor] = useState<string[]>();
    const [loding,setloding]=useState<boolean>(false)



    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();


    useEffect(() => {

        setfinddepo(data);
        setdoctor(data.doctors);

    }, []);

    type inputsvalue = {

        patientname: string
        age: string
        address: string
        mobile: string
        email: string
        bystandername: string
        date: string
        doctername: string

    }


    const initialValues: inputsvalue = {

        patientname: "",
        address: "",
        age: "",
        bystandername: "",
        date: "",
        doctername: "",
        email: "",
        mobile: ""



    }

    const [nextpage, setnextpage] = useState<boolean>(true);
    const [gender, setgender] = useState<string>("");
    const [pymentmode, setpymentmode] = useState<string>("");

    function getDateTime() {
        var now: any = new Date();
        var year: any = now.getFullYear();
        var month: any = now.getMonth() + 1;
        var day: any = now.getDate();

        if (month.toString().length == 1) {
            month = '0' + month;
        }
        if (day.toString().length == 1) {
            day = '0' + day;
        }

        var dateTime = year + '-' + month + '-' + day
        return dateTime;
    }



    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({

        initialValues: initialValues,
        validationSchema: validationSchema,

        onSubmit: (value) => {

            if (gender) {

                const date = getDateTime()

                if (value.date === date) {

                    const currTime = new Date().toLocaleTimeString()

                    console.log("curenttime", currTime)

                    if (currTime < "2:00:pm") {

                        setnextpage(false);

                    } else {

                        message.error("This Date Booking Is Closed. Choose Another Day")

                    }

                } else {

                    setnextpage(false);

                }

            } else {

                message.error("select patient gender");


            }

        }
    })

    const formsubmit = () => {

        setloding(true)

        if (pymentmode) {

            const data = {
                pyment: pymentmode,
                gender: gender,
                data: values,
                department: finddepo?.department,
                fees: finddepo?.fees
            }

            axios.post("/conform_booking", data).then((respo) => {

                const result = respo.data;

                if (result.authfaild) {

                    navigate("/login");

                } else if (result.flag) {

                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'your Booking successfuly !',
                        showConfirmButton: false,
                        timer: 2000
                    });

                    navigate("/");

                } else if (result.rez) {

                    onlinePayment(result.razor_oder, (pyment: any, order: any) => {


                        const data = {
                            pyment,
                            order
                        }


                        axios.post("/razorpya_verification", data).then((respo) => {

                            const pyresult = respo.data

                            if (pyresult.flag) {

                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'your Booking successfuly !',
                                    showConfirmButton: false,
                                    timer: 2000
                                });

                                navigate("/");

                            } else {


                                message.error("online pyment not completed")

                            }

                        }).catch(err => {

                            message.error("somthing worng ")


                        })


                    })


                } else {

                    message.error("server err ")
                }



            }).catch(err => {

                message.error("somthing worng...! check your connection ")


            })




        } else {

            message.error("plz choose pyment option")

        }
    }

    return (

        <div>

            <Navebar />

            <div className='fix-main'>

                <div className='container  fix-cont'>

                    {

                        nextpage ?



                            <div className='fix-box-main'>

                                <p className='fix-title'> Book Your Apoinment </p>


                                <span className='fix-opttion'> You choose Department is :</span> <span className='fix-opt-ans'>{finddepo?.department}</span><br />



                                <hr />





                                <form className='fix-form' onSubmit={handleSubmit}   >

                                    <input
                                        className='fix-input'
                                        placeholder='Enter Patient Name '
                                        type='text'
                                        name='patientname'
                                        id='patientname'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.patientname}



                                    /> <br />

                                    {
                                        errors.patientname && touched.patientname ?

                                            <> <span>{errors.patientname}    </span> <br /> </>

                                            :

                                            <br />
                                    }




                                    <input
                                        className='fix-input'
                                        placeholder='Age'
                                        type='text'
                                        name='age'
                                        id='age'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.age}



                                    /><br />

                                    {
                                        errors.age && touched.age ?

                                            <>   <span>{errors.age}    </span> <br /> </>

                                            :

                                            <br />
                                    }

                                    <input
                                        className='fix-input'
                                        placeholder='Address'
                                        type='text'
                                        name='address'
                                        id='address'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.address}


                                    /><br />

                                    {
                                        errors.address && touched.address ?

                                            <span>{errors.address}    </span>

                                            :

                                            <br />
                                    }

                                    <input

                                        className='fix-input'
                                        placeholder='Mobile No'
                                        type='text'
                                        name='mobile'
                                        id='mobile'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.mobile}

                                    /><br />

                                    {
                                        errors.mobile && touched.mobile ?

                                            <span>{errors.mobile}    </span>

                                            :

                                            <br />
                                    }




                                    <input

                                        className='fix-input'
                                        placeholder='Email id'
                                        type=' text'
                                        name='email'
                                        id='email'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}




                                    /><br />

                                    {
                                        errors.email && touched.email ?

                                            <span>{errors.email}    </span>

                                            :

                                            <br />
                                    }

                                    <label> Genter</label><br />

                                    <label> male</label>

                                    <input
                                        className='fix-radio'
                                        type='radio'
                                        id='male'
                                        name='gender'
                                        onChange={() => { setgender("male") }}




                                    />

                                    <label> femail</label>

                                    <input
                                        className='fix-radio'
                                        type='radio'
                                        id='female'
                                        name='gender'
                                        onChange={() => { setgender("female") }}




                                    />

                                    <label> others</label>

                                    <input
                                        className='fix-radio'
                                        type='radio'
                                        id='other'
                                        name='gender'
                                        onChange={() => { setgender("other") }}



                                    /><br /><br />





                                    <input
                                        className='fix-input'
                                        placeholder='Enter bystander Name'
                                        type='text'
                                        name='bystandername'
                                        id='bystandername'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.bystandername}


                                    /><br />

                                    {
                                        errors.bystandername && touched.bystandername ?

                                            <span>{errors.bystandername} </span>

                                            :

                                            <br />
                                    }




                                    <select name="doctername" id="doctername" onChange={handleChange} onBlur={handleBlur} value={values.doctername} className='fix-select'>

                                        <option> selcet Doctor </option>
                                        {
                                            doctor?.map((obj) => (

                                                <option value={obj} > {obj} </option>

                                            ))

                                        }

                                    </select> <br />

                                    {
                                        errors.doctername && touched.doctername ?

                                            <span>{errors.doctername}    </span>

                                            :

                                            <br />
                                    }

                                    <input
                                        className='fix-input'
                                        placeholder='enter your consulting date'
                                        type='date'
                                        name='date'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.date}

                                    /><br />

                                    {
                                        errors.date && touched.date ?

                                            <>   <span> {errors.date}    </span><br /> </>

                                            :

                                            <br />
                                    }

                                    <button type='submit' className='fix-btn-next'> Next  </button>



                                </form>


                            </div>

                            :

                            <div className='pyment-main'>

                                <p className='pyment-title'> Choose Pyment Mode </p>

                                <p className='pyment-fees'>consultation fees:{data.fees} </p>


                                <div className='pyment-opt-box'>

                                    <div className='pyment-online'>

                                        <p className='pyment-text'> Cash On Pyment</p>

                                        <input className='pyment-radio'
                                            type='radio'
                                            name='pymentmode'
                                            value={"COP"}
                                            onChange={(e) => { setpymentmode(e.target.value) }}

                                        />

                                    </div>

                                    <div className='pyment-cop'>

                                        <p className='pyment-text-on'> Online Pyment </p>

                                        <input className='pyment-radio'
                                            type='radio'
                                            name='pymentmode'
                                            value={"ONLINE"}
                                            onChange={(e) => { setpymentmode(e.target.value) }}
                                        />


                                    </div>



                                </div>

                                <p className='pyment-note'>  Note ! </p>

                                <p className='pyment-not-text'> You Will Reach On Time In The Hospital And Visite Reseption And Collect Your File </p>



                                <button onClick={formsubmit} className='pyment-btn'>

                                    {
                                        loding ?

                                        <div className='pyment-loding' >

                                        <Oval
                                               height={30}
                                               width={30}
                                               color="#1A5D1A"
                                               wrapperStyle={{}}
                                               wrapperClass=""
                                               visible={true}
                                               ariaLabel='oval-loading'
                                               secondaryColor="#EEF5FF"
                                               strokeWidth={2}
                                               strokeWidthSecondary={2}
       
       
                                           />
                                           
                                           
                                           </div>   

                                           : <p> Conform Booking  </p>
                                    }

                                



                                </button>




                            </div>











                    }









                </div>









            </div>
        </div>
    )
}

export default Fixapoinment
