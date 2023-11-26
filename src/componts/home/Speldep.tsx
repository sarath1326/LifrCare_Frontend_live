


import React from 'react'
import "./Speldep.css"

function Speldep() {
    return (
        <div>

            <div className='spdep-main' >

                <p className='spdep-title' >  Speciality Departments </p>

                <div className='container spdep-container'  >

                    <div className='spdep-dep-box' >

                        <img src='./hart2.jpg' className='spdep-img' />

                        <div className='spdep-dep-title' >

                            <p className='spdep-dep-text' >  Cardiology </p>

                        </div>


                    </div>

                    <div className='spdep-dep-box' >

                        <img src='./nefro.jpg' className='spdep-img' />

                        <div className='spdep-dep-title' >

                            <p className='spdep-dep-text' >  Nephrology </p>

                        </div>


                    </div>

                    <div className='spdep-dep-box' >

                        <img src='./nero.webp' className='spdep-img' />

                        <div className='spdep-dep-title' >

                            <p className='spdep-dep-text' >  Neurology </p>

                        </div>


                    </div>



                </div>



            </div>








        </div>
    )
}

export default Speldep
