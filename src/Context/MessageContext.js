import React, { createContext, useState, useContext } from 'react';

const MessageContext = createContext();

export const useMessageContext = () => useContext(MessageContext);

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (text) => {
    setMessages([...messages, { id: messages.length + 1, text }]);
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessageContext.Provider>
  );
};