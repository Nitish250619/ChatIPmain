import React from 'react'
import Box from '@mui/material/Box';
import NavBar from '../NavBar/NavBar';
import ChatInterface from './ChatInterface/ChatInterface';

const Conversation = () => {
  return (
    <Box sx={{height:"100vh" , width:"100vw" , display:"flex" , flexDirection:"column"}}>
      <Box>
        <NavBar/>
      </Box>
      <Box sx={{flexGrow:1 ,display:"flex", alignItems:"center" , justifyContent:"center" ,position:"sticky"
      , overflow:"hidden"}} >
      <ChatInterface/>
      </Box>
    </Box>
  )
}

export default Conversation