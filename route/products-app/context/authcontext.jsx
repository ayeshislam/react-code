import { createContext } from "react";
import { useState } from "react";

export const Authcontext = createContext()
export const Authprovider = ({children})=>{

  let [isLogged,setIsLogged] = useState({
    flag:false,
    user:''
  })

  
  return(
    <Authcontext.Provider value={{isLogged,setIsLogged}}>
      {children}
    </Authcontext.Provider>
  )
}