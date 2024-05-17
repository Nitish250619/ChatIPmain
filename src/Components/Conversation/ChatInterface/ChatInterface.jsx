import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import ChatInput from './ChatInput/ChatInput';
import SentMessage from '../Message/SentMessage';
import { useMessageContext } from '../../../Context/MessageContext'; 


const ChatInterface = () => {
  const { messages } = useMessageContext();
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [messages]);


  return (
    <Box
      component="section"
      ref={containerRef}
      sx={{
        height: '100%', 
        width: {
          xs: '100%',
          sm: '100%', 
          lg: '80%'
        },
        display: 'flex', 
        flexDirection: 'column',
        position:"relative" 
      }}
    >
      <Box 
        component="div" 
        sx={{
          flex: 1,
          height: 'calc(100% - 55px)',         
          overflow: 'auto', 
          display: 'flex',
          flexDirection: 'column-reverse',
          gap:"14px",
          paddingY: '10px',
          
        }}
      >
          {messages.slice().reverse().map((message) => ( 
          <SentMessage key={message.id} text={message.text} />
        ))}
      </Box>

      <Box 
        component="div" 
        sx={{
          height: "55px",
          margin:"30px 0px 8px 0px",
          position: 'sticky',
          bottom: 0,
        }}
      >
       <ChatInput/>
      </Box>
    </Box>
  );
};

export default ChatInterface;
