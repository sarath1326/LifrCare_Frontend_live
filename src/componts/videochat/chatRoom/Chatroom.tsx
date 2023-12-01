

import React from 'react'
import "./Chatroom.css"
import { FaVideo, FaMicrophone, FaVideoSlash } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import Reactplayer from "react-player"
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { SocketContext,RoomidContext } from "../contextApi/Socket"
import { message } from "antd"
import Peer from "simple-peer"
import { useLocation,useNavigate } from 'react-router-dom';
import { FaMessage } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { useRef } from 'react';
import { Console } from 'console';
import { LuAlertTriangle } from "react-icons/lu";



function Chatroom() {

  type msglisttype={

      name:string
      msg:string
   }


  const { Socket ,setflag } = useContext(SocketContext)
 const { roomidpass } = useContext(RoomidContext)
 const navigate=useNavigate()

  
  const [msg, setmsg] = useState<string>('')
  const [doctor, setdoctor] = useState<string>('')
  const [callersignal, setcallersignal] = useState<any>(null)
  const [ansbtn, setansbtn] = useState<boolean>(false)
  const [mystream, setmystream] = useState<any>()
  const [doctorstream, setdoctorstream] = useState<any>(null)
  const [msg_box__con, setmsg_box_con] = useState<boolean>(false)
  const [levbtn, setlevebtn] = useState<boolean>(false)
  const [sentstream,setsentstream]=useState<any>()

  const [msglist,setmsglist]=useState<msglisttype[]>([])
  const [video, setvideo] = useState<boolean>(true)
  const [audio,setaudio]=useState<boolean>(true)

  const connectionRef:any = useRef();



  


  


  useEffect(() => {


        if(video && audio){

          navigator.mediaDevices.getUserMedia({ video:video, audio:audio}).then((res) => {

            setmystream(res)
    
            setsentstream(res)
           
            console.log(" video and audio on ")
    
           })
  
       
        }

        if(!video){


        mystream.getVideoTracks()[0].stop()
        sentstream.getVideoTracks()[0].stop()   
        

            console.log("video off")
        }
      
      
      },[video,audio])


      
      
      const handil_call_accept = () => {
         
          setdoctor("doctor")
  }


  const doctor_session_req = (data: any) => {

    setansbtn(true)

    const { signal } = data

    console.log("doctor call session")


    setcallersignal(signal)


  }

  const call_answer = () => {

    setansbtn(false)
    setlevebtn(true)

    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: sentstream        
    
    })

    peer.on("signal", (data) => {

      Socket.emit("answersession", { signal: data, to: "doctor" })

    })

    peer.on("stream", (stream) => {

      console.log("doctor stream", stream)
      setdoctorstream(stream)


    })

    peer.signal(callersignal)

    connectionRef.current = peer;
  }

  
  
  
  const send_msg = () => {

    const data={

          name:"my",
          msg:msg
        }

    setmsglist([...msglist,data])
    Socket.emit("user_send_msg_to_doctor", { msg: msg, to: "doctor" })
    setmsg('')
  }


  const reseve_msg = (data: any) => {

    console.log("docmsg",data.msg)
    const data_doc={
       name:"doc",
      msg:data.msg
  }

setmsglist([...msglist,data_doc])
}

  useEffect(() => {

    Socket.on("user_receve_msg", reseve_msg)
  
  }, [msglist])
  
  useEffect(() => {

    Socket.on("call_replya", handil_call_accept)
    Socket.on("session_req_to_user", doctor_session_req)
    Socket.on("doctor_leve_req",leve_req_resev)
  
  }, [Socket])


  const leve_session=()=>{
    
         setflag(true)
         setsentstream(null)
          
       Socket.emit("leve_session_from_user",{to:"doctor",from:roomidpass})

       navigate("/levepage")
      
      }

      const leve_req_resev=()=>{
          
           setflag(true)
           setdoctorstream(null)
           navigate("levepage")

             
      }
      
      
      
    return (
    <div>

      <div className='chatroom_main' >

        <p className='chatroon-title' > Consulting Room    </p>
        <span className='chatroom-sub-title'  > Room ID :  </span><span className='chatroom-data' >  {roomidpass}   </span><br />
        <span className='chatroom-sub-title' > Your Coonected To :    </span> <span className='chatroom-data'  > {doctor}   </span><br />

        {
          ansbtn ?
            <button className='chtroom-ss-btn' onClick={call_answer}> Accept Session  </button>

            : < div  className='alert'    > <LuAlertTriangle style={{color:"orange" ,fontSize:"20px"  }}  />  
            
            <span style={{color:"white"}}  > Sorry.. Doctor Consulting A Patient. Please Wait This Page  </span>     
            
            </div>  
        }

        {

          levbtn ?

            <button className='chtroom-lev-btn' onClick={leve_session}  > Leve Session  </button>

            :  null


        }




        <FaMessage className='video-box-mesg-btn' onClick={() => { setmsg_box_con(true) }} />
        <span className='msg-span' > Message    </span>

        {

          msg_box__con ?

            <div className='msg-box-main' >

          
              <IoIosCloseCircle className='msg-box-cl-icon' onClick={() => { setmsg_box_con(false) }} />

              <p className='cht-title' > Chat Box   </p>

              <div className='msg-iner-box' >



                {

                  msglist.map((obj)=>(



                    <div id={obj.name==="my" ? "myid" : "doc" }  >

                    <p className='msg' > {obj.msg}  </p>

                    </div>
                    
                    ))


                }


              </div>

              <input
                className='msg-input'
                type='text' placeholder='send some messages'
                onChange={(e) => { setmsg(e.target.value) }}
                value={msg}

              />

              <IoMdSend className='msg-send-icon' onClick={send_msg} />






            </div>

            : null

        }
        <div className='video-box-main' >

          <div className='video_box-doctor' >


            <Reactplayer url={doctorstream} width={300} height={300} playing muted />


          </div>

          <div className='video_box-doctor-big' >


            <Reactplayer url={doctorstream} width={500} height={500} playing muted />


          </div>



          <div className='video-box-my' >


            <Reactplayer url={mystream} width={150} height={150} playing muted  />

            <div className='video-box-control' >

             {

              video ?

               <FaVideoSlash className='video-box-icon' onClick={()=>{setvideo(!video)}}     />

               :

               <FaVideo className='video-box-icon' onClick={()=>{setvideo(!video)}} />
               
               
               }
              
             
             
             
              <FaMicrophone className='video-box-icon' onClick={()=>{setaudio(false)}}   />


            </div>


          </div>






        </div>










      </div>






    </div>
  )
}

export default Chatroom
