import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import { Authprovider } from '../context/authcontext.jsx'
import {ChakraProvider} from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
    <Authprovider>
    <Router>
    <App />
    </Router>
    </Authprovider>
    </ChakraProvider>
    
    
   
  </StrictMode>,
)
