

import React from 'react'
import "./Fixapoinment.css"
import {useState} from "react"
import { useFormik } from 'formik'
import {validationSchema} from "./Fixapoinmentschema"
import {message} from "antd"



function Fixapoinment() {

    type inputsvalue={

        patientname:string
        age:string
        address:string
        mobile:string
        email:string
        bystandername:string
        date:string
        doctername:string
       
    }

    
    const initialValues:inputsvalue={

        patientname:"",
        address:"",
        age:"",
        bystandername:"",
        date:"",
        doctername:"",
        email:"",
       mobile:""
       


    }

    const [nextpage,setnextpage]=useState<boolean>(true)
    const [gender,setgender]=useState<string>("")
    const  [pymentmode,setpymentmode]=useState<string>("")
    


    
    const {values,errors,handleBlur,handleChange,handleSubmit,touched }=useFormik({

        initialValues:initialValues, 
        validationSchema:validationSchema,
        
        onSubmit:(value)=>{

           if(gender){

            setnextpage(false)

           }else{

              message.error("select patient gender")
           }
        }
    })

    const formsubmit=()=>{

          
            
        if(pymentmode){

            const data={
                pyment:pymentmode,
                gender:gender,
                data:values
    
            }

            console.log(data)
        
        
        
        
        }else{

            message.error("plz choose pyment option")

        }

    
    
    }

    


  return (
    <div className='fix-main'>

        <div className='container  fix-cont'>
            <div className='fix-box-main'>

                <p className='fix-title'> Book Your Apoinment </p>


                <span className='fix-opttion'> You choose Department is :</span> <span className='fix-opt-ans'> Cardiolagi </span><br/>

                <span className='fix-opttion'> Availabel Doctors is :</span>   
                
                <span className='fix-opt-ans'>1) Arun k MBBs MD, </span>
                <span className='fix-opt-ans'>2) jose pulikan  MBBs MD </span>  

                <hr/>

                {

                    nextpage ? 

                    <>


                <form  className='fix-form' onSubmit={handleSubmit}   >

                    <input
                    className='fix-input'
                    placeholder='Enter Patient Name '
                     type='text'
                     name='patientname'
                     id='patientname'
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.patientname}


                    
                    /> <br/>

                    {
                        errors.patientname && touched.patientname ? 

                       <> <span>{errors.patientname}    </span> <br/> </>

                        :

                        <br/>
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

                    
                    
                    /><br/>

                  {
                        errors.age && touched.age ? 

                     <>   <span>{errors.age}    </span> <br/> </>

                        :

                        <br/>
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
                    
                    
                    /><br/>

                    {
                        errors.address && touched.address ? 

                        <span>{errors.address}    </span>

                        :

                        <br/>
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
                    
                    /><br/> 

                     {
                        errors.mobile && touched.mobile ? 

                        <span>{errors.mobile}    </span>

                        :

                        <br/>
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
                    
                    
                    
                    
                    /><br/> 

                  {
                        errors.email && touched.email ? 

                        <span>{errors.email}    </span>

                        :

                        <br/>
                    }

                    <label> Genter</label><br/>

                    <label> male</label>
                    
                    <input 
                    className='fix-radio'
                    type='radio'
                    id='male'
                    name='gender'
                    onChange={()=>{setgender("male")}}
                    
                    

                    
                    />

                    <label> femail</label>

                    <input 
                    className='fix-radio'
                    type='radio'
                    id='female'
                    name='gender'
                    onChange={()=>{setgender("female")}}
                    

                    
                    
                    />

                    <label> others</label>

                    <input 
                    className='fix-radio'
                    type='radio'
                    id='other'
                    name='gender'
                    onChange={()=>{setgender("other")}}
                    

                    
                    /><br/><br/>



                    

                    <input 
                    className='fix-input'
                    placeholder='Enter bystander Name'
                    type='text'
                    name='bystandername'
                    id='bystandername'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.bystandername}
                
                
                /><br/> 

                   {
                        errors.bystandername && touched.bystandername ? 

                        <span>{errors.bystandername} </span>

                        :

                        <br/>
                    }




                <select name="doctername" id="doctername" onChange={handleChange} onBlur={handleBlur} value={values.doctername}     className='fix-select'>

                   <option> selcet Doctor </option>
                   <option> Arun k </option>
                    <option> jose pulikan</option>
                    <option> mohan kumar </option>
                    
                    </select> <br/>

                    {
                        errors.doctername && touched.doctername ? 

                        <span>{errors.doctername}    </span>

                        :

                        <br/>
                    }

                    <input 
                    className='fix-input'
                    placeholder='enter your consulting date'
                    type='date'
                    name='date'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.date}
                    
                    /><br/>

{
                        errors.date && touched.date ? 

                     <>   <span> {errors.date}    </span><br/> </>

                        :

                         <br/>
                    }
                    
                    <button type='submit'  className='fix-btn-next'> Next  </button>
                    
                    
                    
                    </form>

                    


                    </>

                    :  


                    <>

                    <p className='fix-pyment-hed'>  Choose Pyment Option </p>
                    
                        <div className='fix-pyment-select'>
                     
                   <div className='fix-pya-div'><label className='fix-pyment-lable'> Online Pyment </label>  
                   <input className='fix-pyment-radio' type='radio' 
                   id='online'
                   name='pymentmode'
                  onChange={()=>{setpymentmode("online")}}
                   />
                   
                   </div>  <br/>

                  <div className='fix-pya-div2'><label className='fix-pyment-lable'> Cash On Pyment </label> 
                  
                  <input className='fix-pyment-radio' type='radio' 

                  id='cod'
                  name='pymentmode'
                  onChange={()=>{setpymentmode("cod")}}
                  
                  
                  />
                  
                  </div>


                      </div>

                     <div className='fix-importent'>

                        <p>  your are reach in hospital on time and visit resaption and  

                            collect your file    


                        </p>
                        
                        </div>


                        <button className='fix-confo-btn' onClick={formsubmit}    > Conform Booking </button>

                    
                    
                    
                    
                    
                    
                    </>






                    }








            </div>

            






        </div>

       
       





      
    </div>
  )
}

export default Fixapoinment
