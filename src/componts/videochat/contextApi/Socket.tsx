


import { createContext, useMemo, useState } from "react";
import { io } from "socket.io-client"

export const SocketContext: React.Context<any> = createContext(null)
export const RoomidContext: React.Context<any> = createContext(null)







export const SocketProvider = (props: any) => {

     const Socket = useMemo(() => io( "https://lifecarebackend-439a.onrender.com"), [])
     const [flag,setflag]=useState<boolean>(false)


     return (

          <SocketContext.Provider value={{ Socket, flag,setflag }}>

               {
                    props.children
               }


          </SocketContext.Provider>
     )


}




export const Roomidprovider = (props: any) => {

     const [roomidpass, setroomidpass] = useState<string>('')

     return (


          <RoomidContext.Provider value={{ roomidpass, setroomidpass }} >


               {
                    props.children
               }


          </RoomidContext.Provider>
     )


}