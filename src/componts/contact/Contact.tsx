

import React from 'react'
import "./Contact.css"
import Navebar from '../navbar/Navebar'
import { useState } from 'react'
import { IoMdCall } from "react-icons/io";

function Contact() {

    type datatype={

          name:string
          number:number
    }



    const [data,setdata]=useState<datatype[]>([
        
        {name:"Emergency" ,number:7592831937},
        {name:"Genaral Enquiry" ,number:7592831937},
        {name:"Radiology" ,number:7592831937},
        {name:"Pharmacy" ,number:7592831937},
        {name:"Laboratory" ,number:7592831937},
        {name:"HO Office" ,number:7592831937}
    
    
    ])

    





  return (
    <div>
        <div className='con-main' >
            <Navebar />
            
            <div className='  con-inner-box'>

                <div className='con-right-box'>

                    <p className='con-title'>  Life Care Hospital and Research Center   </p>

                   

                


              


        


                     


                </div>

                <div className='con-left-box'>


                   {
                    data.map((obj)=>(

                        <div className='con-data-box' >

                            <p className='con-data-textt' > {obj.name}  </p>
                            <p className='con-data-textt' > {obj.number}  </p>



                        </div>
    


                    ))


                   }
                    

                     






                </div>





            </div>






       
        </div>




      
    </div>
  )
}

export default Contact
