import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ChatEmoji from "./ChatEmoji/ChatEmoji";
import ChatFileAcces from "./ChatFileAcces/ChatFileAcces";
import ChatMic from "./ChatMic/ChatMic";
import { useMessageContext } from "../../../../Context/MessageContext";

const ChatInput = () => {
  const [inputText, setInputText] = useState("");
  const { addMessage } = useMessageContext();

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      addMessage(inputText); 
      setInputText("");
    }
  };

  const handleEmojiSelect = (emoji) => {
    setInputText((prevText) => prevText + emoji.native); 
  };

  return (
    <Box
      component="div"
      sx={{
        bgcolor: "grey",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ChatEmoji handleEmojiSelect={handleEmojiSelect} />
      <ChatFileAcces />
      <TextField
        variant="outlined"
        type="text"
        placeholder="Type a message..."
        value={inputText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        sx={{
          flexGrow: 1,
          fontSize: "clamp(14px, 2vw, 18px)",
          bgcolor: "#00000026",
          height: "40px",
          borderRadius: "50px",
          "& .MuiOutlinedInput-root": {
            padding: "0",
            height: "40px",
            "& .MuiOutlinedInput-input": {
              padding: "8px 20px",
              height: "24px",
              boxSizing: "border-box",
            },
            color: "white",
            "&::placeholder": {
              color: "white",
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&:focus": {
            outline: "none",
          },
        }}
      />

      <ChatMic />
    </Box>
  );
};

export default ChatInput;
