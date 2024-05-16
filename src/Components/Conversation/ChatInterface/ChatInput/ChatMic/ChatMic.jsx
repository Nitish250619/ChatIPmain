import React from "react";
import Box from "@mui/material/Box";
import { ReactComponent as MicIcon } from "../../../../../Assets/mic_24dp.svg";
import styles from "./ChatMic.module.css";

const ChatMic = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40px",
      }}
    >
      <MicIcon className={styles.MicIcon} />
    </Box>
  );
};

export default ChatMic;
