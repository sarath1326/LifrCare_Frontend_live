

import React from 'react';
import "./Login.css";
import Navebar from '../navbar/Navebar';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from "../../Constant/Axiospage";
import { message } from "antd";
import { MdError } from "react-icons/md";
import { useState } from 'react'
import {validationSchema} from "./Schema"






function Login() {

  const navigate=useNavigate();
  const [errmsg,seterrmsg]=useState<boolean>(false)
  const[msg,setmsg]=useState<string>("")

  axios.defaults.withCredentials = true;

   type inputType={

      email:string
      password:string

   }

   const initalValues:inputType={
        
        email:"",
        password:""
   }



   const {errors,values,handleChange,handleSubmit,handleBlur,touched}=useFormik({


        initialValues:initalValues,
        validationSchema:validationSchema,


      onSubmit:(value)=>{


           axios.post("/login",value).then((respo)=>{

            const result= respo.data;

             if(result.flag){

                navigate("/");
                
            
             }else if(result.emailerr){

              setmsg("email not valied");
              seterrmsg(true);
              
              
              }else if(result.err){

                  message.error("server error");
             
                }else{

                 setmsg("password and email id not valid");
                 seterrmsg(true);
              
                }
              
              }).catch(err=>{

                message.error("ax",err);
           });



      }

     
   });








  return (
    <div>

      <Navebar />


      <div className='login-main'>

        


           <div className='form-box-main'>

               <p className='login-title'> Login </p>

               <div className='form-main-div'>

              {

            errmsg ?  
              
             <div className='log-err-box'>   

            

             <span className='login-err-msg'>  <MdError className='login-err-icon' />  {msg}  </span>
             
             </div>

             : null

              }


                    <form  onSubmit={handleSubmit}  className='form-main'  >

                       <label> Email Id</label><br/>
                       
                       <input type='text' 
                       placeholder='Enter Email Id' 
                       name='email'
                       value={values.email}
                       onChange={handleChange}
                       onBlur={handleBlur}

                
                       /><br/>

                       {

                        errors.email && touched.email
                        ? 

                        <span className='sig-err-span'> {errors.email}</span>

                        : 
                        null


                       }
                       
                       
                       
                       <br/>

                       <label> Password </label><br/>
                       <input type='password' 
                       placeholder='Enter Password ' 
                       name='password'
                       value={values.password}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       
                       /><br/>

                       {

                        errors.password && touched.password
                        ? 

                      <>  <span className='sig-err-span'>{errors.password}</span><br/></>

                       :null

                       }


                       <button type="submit" className='login-btn'> Login  </button>
                      
                       <p onClick={()=>{navigate("/signup")}} className='login-sig-opt'> Create New Account ? </p>




                    </form>



               </div>
    





           </div>

       
                



        </div>

      







      
    </div>
  )
}

export default Login
