import React from "react";
import { Avatar, Box, Divider, IconButton, Typography } from "@mui/material";
import { MoreVert, WatchLater, PlaylistAdd } from "@mui/icons-material";

function VideoCard(props) {
  return (
    <Box className="videoCard">
      <Box className="watchLater">
        <WatchLater className="videoIcon" />
      </Box>
      <Box className="playlistAdd">
        <PlaylistAdd className="videoIcon" />
      </Box>

      <img className="video-img" src={props.thumbnail} alt="Video Thumbnail" />
      <Box className="duration">{props.duration} </Box>
      <Box
        className="video-data"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Avatar src={props.channelLogo} alt="Channel Logo" />
        <Box className="channel-details" sx={{ marginLeft: "12px" }}>
          <Typography variant="subtitle1" component="h5">
            {props.title}
          </Typography>
          <Typography variant="body2" className="c-name">
            {props.channelName}
          </Typography>
          <Typography variant="body2">
            {props.views} &bull; {props.time}
          </Typography>
        </Box>
        <IconButton>
          <MoreVert className="moreIcon" />
        </IconButton>
      </Box>
      <Divider />
    </Box>
  );
}

export default VideoCard;
