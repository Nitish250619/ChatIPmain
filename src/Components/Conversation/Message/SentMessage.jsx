import React from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const SentMessage = ({text}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); 
  const isLaptop = useMediaQuery(theme.breakpoints.up("md")); 

  return (
    <Box
      sx={{
        display: "inline-block",
        bgcolor: "#EDEDED9C",
        maxWidth: "70%", 
        textAlign: "left", 
        borderRadius:"20px 0px 20px 20px",
        marginRight:"10px",
        p: "8px", 
        alignSelf: "flex-end",
        maxHeight: "100%",
        wordBreak:"break-word",
        overflowWrap:"break-word",
        fontSize: isMobile
          ? "14px"
          : isTablet
          ? "16px"
          : isLaptop
          ? "18px"
          : "inherit", 
          whiteSpace:"pre-wrap"
      }}
    >
      {text}
    </Box>
  );
};

export default SentMessage;
