import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Generate from "../Generate/Generate"
import Join from "../Join/Join"
import ChatInterface from '../Conversation/ChatInterface/ChatInterface';



const Routings = () => {
    return (
      
        <Routes>
          <Route path="/" element={<ChatInterface/>} />
          <Route path="/generateIp" element={<Generate/>} />
          <Route path="/joinIP" element={<Join/>} />
        </Routes>
      
    );
  };
  
  export default Routings;