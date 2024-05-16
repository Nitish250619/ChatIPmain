import React, { useState } from "react";
import Box from "@mui/material/Box";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { ReactComponent as EmojiIcon } from "../../../../../Assets/emoji_icon.svg";
import styles from "./ChatEmoji.module.css";

function ChatEmoji({ handleEmojiSelect }) {
  const [showPicker, setShowPicker] = useState(false);

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40px",
          cursor: "pointer",
        }}
        onClick={togglePicker} 
      >
        <EmojiIcon className={styles.chatemoji} />
      </Box>
      {showPicker && (
        <Box
          sx={{
            position: "absolute",
            bottom: "50px",
            left: "10px",
            zIndex: "100",
          }}
        >
          <Picker
            data={data}
            onEmojiSelect={handleEmojiSelect}
            showPreview={false}
            showSkinTones={false}
          />
        </Box>
      )}
      {showPicker && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 99,
          }}
          onClick={togglePicker} 
        />
      )}
    </Box>
  );
}

export default ChatEmoji;
