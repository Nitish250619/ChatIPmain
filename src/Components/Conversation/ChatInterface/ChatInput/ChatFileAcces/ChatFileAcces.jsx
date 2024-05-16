import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import { ReactComponent as FileAccesIcon } from "../../../../../Assets/attach_file.svg";
import styles from "./ChatFileAcces.module.css";
import { useDropzone } from "react-dropzone";

const ChatFileAcces = () => {
  const [showOptions, setShowOptions] = useState(false);
  const imageInputRef = useRef(null); 
  const videoInputRef = useRef(null); 
  const documentInputRef = useRef(null); 

  const handleFileOptionClick = (option) => {
    setShowOptions(false);
    switch (option) {
      case "image":
        imageInputRef.current.click(); 
        break;
      case "video":
        videoInputRef.current.click(); 
        break;
      case "document":
        documentInputRef.current.click(); 
        break;
      default:
        break;
    }
  };

  const onDrop = (acceptedFiles) => {
    
    console.log("Accepted files:", acceptedFiles);
   
    setShowOptions(false);
  };

  const { getRootProps } = useDropzone({ onDrop });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40px",
        position: "relative",
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      <FileAccesIcon
        className={styles.FileAccesIcon}
        onClick={() => setShowOptions(!showOptions)}
      />
      {showOptions && (
        <>
          <Box
            sx={{
              position: "absolute",
              bottom: "52px",
              left: 0,
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              zIndex: 100,
              padding: "8px",
            }}
          >
            <div>
              <span
                onClick={() => handleFileOptionClick("image")}
                style={{ marginRight: "8px" }}
              >
                +
              </span>
              Image
            </div>
            <div>
              <span
                onClick={() => handleFileOptionClick("video")}
                style={{ marginRight: "8px" }}
              >
                +
              </span>
              Video
            </div>
            <div>
              <span
                onClick={() => handleFileOptionClick("document")}
                style={{ marginRight: "8px" }}
              >
                +
              </span>
              Document
            </div>
          </Box>
        </>
      )}
      
      <div {...getRootProps()} style={{ display: "none" }}>
        <input {...getRootProps()} ref={imageInputRef} accept="image/*" />
      </div>
      <div {...getRootProps()} style={{ display: "none" }}>
        <input {...getRootProps()} ref={videoInputRef} accept="video/*" />
      </div>
      <div {...getRootProps()} style={{ display: "none" }}>
        <input {...getRootProps()} ref={documentInputRef} accept=".pdf,.doc,.docx" />
      </div>
    </Box>
  );
};

export default ChatFileAcces;
