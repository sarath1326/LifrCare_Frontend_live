

import React from 'react'
import "./IDroom.css"
import Navebar from '../../navbar/Navebar'
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import {message} from "antd"
import { useContext } from 'react'
import {SocketContext,RoomidContext} from "../contextApi/Socket"





function IDroom() {

    const [name, setname] = useState<string>('')
    const [roomid, setroomid] = useState<string>('')
    const [errflag, seterrflag] = useState<boolean>(false)
    const [id,setid]=useState('')

    const {Socket}=useContext(SocketContext)

    const { setroomidpass}=useContext(RoomidContext)


   

    const navigate=useNavigate()

    const enterroom=()=>{

         if(!name && !roomid){

                 seterrflag(true)
                 return
                
                }else if(!name){

                    seterrflag(true)
                    return
                
                }else if(!roomid){

                    seterrflag(true)
                    return
                
                }else if(id!=roomid) {
                    
                    message.error("Room ID is incorect")
                    return
                
                }else{


                    Socket.emit("user_join_req",{name:name,roomid:roomid})
                    
                    
                    navigate("/chatroom")

                    setroomidpass(roomid)
                
                }
    }

  

    


    const roomidgenarator=(length:number)=>{

        let result = '';
        const characters = 'ABCDEFGH45222IJKLMNOPQRSTUVW2145665XYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        
       setid(result)
    
    }

    useEffect(()=>{

            roomidgenarator(5)

            
    
        },[])


    return (
        <div>



            <div className='idroom-main'>
                <Navebar />

                <div className='idroom-cont-main'>

                    <p className='idromm-show-id' > This is Your Room ID :<span className='idroom-num' > {id} </span> </p>

                    <p className='idroom-text' > Enter Your name and Room ID Then Get In Chat Room   </p>

                    <div className='idroom-form-div-main' >

                        <div className='idroom-form-div' >

                            <form  className='idroom-form'>

                                <input
                                    className='idroom-input'
                                    type='text'
                                    placeholder=' Enter Your Name'
                                    onChange={(e) => { setname(e.target.value) }}


                                /><br />

                                {
                                    errflag && !name ?

                                        <><span className='idroom-err-span' > * this filed is required </span><br /><br />  </>


                                        : <br />

                                }


                                <input
                                    className='idroom-input'
                                    type='text'
                                    placeholder='Enter Room ID '
                                    onChange={(e) => { setroomid(e.target.value) }}

                                />  <br />

                                {
                                    errflag && !roomid ?

                                        <><span className='idroom-err-span' > * this filed is required </span><br /><br />  </>


                                        : <br />

                                }
                                
                                
                                </form>


                                <button className='idroom-btn' onClick={enterroom}   > Enter Room   </button>


                        </div>



                    </div>




                </div>







            </div>



        </div>
    )
}

export default IDroom
