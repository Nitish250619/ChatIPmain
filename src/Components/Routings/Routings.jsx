import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Generate from "../Generate/Generate"
import Join from "../Join/Join"
import Conversation from '../Conversation/Conversation';



const Routings = () => {
    return (
      
        <Routes>
          <Route path="/" element={<Conversation/>} />
          <Route path="/generateIp" element={<Generate/>} />
          <Route path="/joinIP" element={<Join/>} />
        </Routes>
      
    );
  };
  
  export default Routings;