import React from "react";
import { Avatar } from "@mui/material";
import { MoreVert, WatchLater, PlaylistAdd } from "@mui/icons-material";

function VideoCard(props) {
    return (
        <div className="videoCard">
        <div className="watchLater"><WatchLater className="videoIcon"/></div>
        <div className="playlistAdd"><PlaylistAdd className="videoIcon"/></div>

            <img className="video-img" src={props.thumbnail} alt="Video Thumbnail"/>
            <div className="duration">{props.duration} </div>
            <div className="video-data">
                <Avatar src={props.channelLogo} alt="Channel Logo"/>
                <div className="channel-details">
                    <h5>{props.title}</h5>
                    <p className="c-name">{props.channelName}</p>
                    <p>{props.views} &bull; {props.time}</p>
                </div>
                <MoreVert className="moreIcon"/>
            </div>
        </div>
    );
}

export default VideoCard;
