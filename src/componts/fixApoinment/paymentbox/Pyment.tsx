



import React from 'react'
import "./Pyment.css"

function Pyment() {
  return (
    <div>

        <div className='pyment-main'>

    <p className='pyment-title'> Choose Pyment Mode </p>


          <div className='pyment-opt-box'>

                 <div className='pyment-online'>

                      <p className='pyment-text'> Cash On Pyment</p>  
                      
                      <input className='pyment-radio' 
                      type='radio'
                      name='pyment'
                       />  

                 </div>

                 <div className='pyment-cop'>

                    <p className='pyment-text-on'> Online Pyment </p> 
                    
                    <input className='pyment-radio' 
                    type='radio' 
                    />


                 </div>



          </div>

          <p className='pyment-note'>  Note ! </p>

            <p className='pyment-not-text'> You Will Reach On Time In The Hospital And Visite Reseption And Collect Your File </p>



                           <button className='pyment-btn'> Conform Booking </button>




        </div>




        
    </div>
  )
}

export default Pyment





