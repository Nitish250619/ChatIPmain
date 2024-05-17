import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import  IconButton  from "@mui/material/IconButton";
import  InputAdornment from "@mui/material/InputAdornment";
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

  const handleSendMessage =()=>{
    if(inputText.trim() !== ""){
        addMessage(inputText);
        setInputText("");
    }
  }

  const handleEmojiSelect = (emoji) => {
    setInputText((prevText) => prevText + emoji.native); 
  };

  return (
    <Box
      component="div"
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end",
        bgcolor:"inherit",
      }}
    >
      <ChatEmoji handleEmojiSelect={handleEmojiSelect} />
      <ChatFileAcces />
      <TextField
        variant="outlined"
        type="text"
        multiline
        maxRows={3}
        placeholder="Type a message..."
        value={inputText}
        onChange={handleInputChange}
        sx={{
          flexGrow: 1,
          fontSize: "clamp(14px, 2vw, 18px)",
          bgcolor: "#00000026",
          borderRadius: "20px",
          "& .MuiOutlinedInput-root": {
            padding: "8px 12px",
            "& .MuiOutlinedInput-input": {
              boxSizing: "border-box",
              overflow:"hidden",
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
        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton
                    edge="end"
                    onClick={handleSendMessage}
                    sx={{paddingRight:"10px" , bgcolor:"transparent", margin:"0", '&:hover':{bgcolor:"transparent"}}}
                    >
                        <span style={{cursor:"pointer" , fontSize:"16px" , color:"white"}}
                        >
                            Send
                        </span>
                    </IconButton>
                </InputAdornment>
            )
        }}
      />

      <ChatMic />
    </Box>
  );
};

export default ChatInput;
