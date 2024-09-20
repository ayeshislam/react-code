import { useContext } from "react"
import { Authcontext } from "../context/authcontext"
import { Button,Flex } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"


export const Navbar =()=>{

  let {isLogged,setIsLogged} = useContext(Authcontext)
  let {flag,user} = isLogged
  let navigate = useNavigate()

  function HandleNavigate (path){
   navigate(path)
  }

 return(
  <Flex justify="space-between"
           bgGradient="linear(brown,tomato)"  
           p="2"
           align="center"
  >
    <Button onClick={()=>HandleNavigate("/")}>Home</Button>
    <Button onClick={()=>HandleNavigate('/cart')}>Cart</Button>
    <Flex>
      {
        
        flag?
        
        <>
        <Button m="1">Hi, {user}</Button>
        <Button onClick={()=>HandleNavigate("/login")} m="1">Log out</Button>
        
        </>
       
        :
        <Flex>
        <Button onClick={()=>HandleNavigate("/login")} m="1">Login</Button>
        <Button onClick={()=>HandleNavigate("/signup")} m="1">Sign up</Button>
        </Flex>
      }

    </Flex>
  </Flex>
 )

}