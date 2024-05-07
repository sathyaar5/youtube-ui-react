import React from "react";
import { Box, Typography } from "@mui/material";

function SidebarRow(props) {
  return (
    <Box className="sidebar_row">
      <props.icon className="sidebarRow_icon" />
      <Typography className="sidebarRow_title">{props.title}</Typography>
    </Box>
  );
}

export default SidebarRow;
