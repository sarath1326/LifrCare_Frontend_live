


import React from 'react';
import "./Signup.css";
import Navebar from '../navbar/Navebar';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import  axios from "../../Constant/Axiospage";
import {message}from "antd"
import {validationSchema} from "./Schema"


function Signup() {

     const navigate=useNavigate(); 

     type inputvalue_type={

        name:string
        email:string
        password:string
     }

     const initalValues:inputvalue_type={

        name:"",
        email:"",
        password:""
         
       }






       const {errors,values,handleChange,handleSubmit,handleBlur,touched}=useFormik({

         initialValues:initalValues ,
         validationSchema:validationSchema,

            onSubmit:(value)=>{

                axios.post("/signup",value).then((respo)=>{

                    const result=respo.data;

                    if(result.exit){
                        message.warning("this email already exit. try another one...!");
                    
                    }else if(result.flag){

                          navigate("/login");
                    }else{

                          message.error("servre err ");
                    }


                }).catch(err=>{

                    message.error("somthing worng...! check your connection ");

                      
                });
             }
            
            });



    return (

        <div >

            <Navebar />

            <div className='signup-main'>

                <div className='form-box-main-sig'>

                    <p className='login-title-sig'> Signup </p>

                    <div className='form-main-div-sig'>


                        <form onSubmit={handleSubmit} className='form-main-sig'  >

                            <label>Name </label><br />
                            <input type='text' 
                            placeholder='Enter Your Name'
                            name='name'
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            
                            /><br />

                           {

                            errors.name && touched.name 
                            ?  

                            <span className='sig-err-span'>{errors.name}  </span>
                            
                            :null
                             


                           }
                            
                            
                            <br />

                            <label> Email Id </label><br />
                            <input type='text' 
                            placeholder='Enter Email Id ' 
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            
                            /><br />

                            {

                                errors.email && touched.email 
                                ? 

                                <span className='sig-err-span'>{ errors.email}  </span>
                            
                                 : null




                            }
                            
                            
                            
                            
                            
                            
                            <br/>

                            <label> Password </label><br/>
                            <input type='password' 
                            placeholder='Enter Password' 
                            name='password'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            
                            /><br/>

                            {

                                errors.password && touched.password
                                ?
                              <> <span className='sig-err-span'>{errors.password}  </span><br/></>
                            
                                :  null


                            }



                            <button type='submit' className='login-btn'> Signup   </button>
                            <p onClick={()=>{navigate("/login")}} className='login-sig-opt-sig'>Do You Have  Already Account ?  </p>




                        </form>



                    </div>






                </div>





            </div>


        </div>
    )
}

export default Signup
