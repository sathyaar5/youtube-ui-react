import React from "react";
import { Box, Typography } from "@mui/material";

function SubscriptionRow(props) {
  return (
    <Box className="subscriptionRow">
      <Box className="left">
        <img className="channelLogo" src={props.img} />
        <Typography className="channelName">{props.name}</Typography>
      </Box>
      <Box className="right">{/* <img className="LiveImg" src={Live}/> */}</Box>
    </Box>
  );
}

export default SubscriptionRow;
