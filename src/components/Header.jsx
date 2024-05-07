import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TheatersIcon from "@mui/icons-material/Theaters";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import HelpIcon from "@mui/icons-material/Help";
import FeedbackIcon from "@mui/icons-material/Feedback";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";

import YoutubeLogo from "../components/Youtube-logo.png";
import SidebarRow from "./SidebarRow";
import SubscriptionRow from "./SubscriptionRow";

function Header() {
  const toggleSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    const MiniSidebar = document.querySelector(".mini_sidebar");
    if (sidebar) {
      sidebar.classList.toggle("active");
    }
    if (MiniSidebar) {
      MiniSidebar.classList.toggle("active");
    }
  };

  return (
    <Box className="parent_header">
      <Box className="header">
        <Box className="header_left" onClick={toggleSidebar}>
          <MenuIcon />
          <img className="header_logo" src={YoutubeLogo} alt="YouTube Logo" />
        </Box>
        <Box className="header_input">
          <Box className="header_middle">
            <input className="SearchInput" placeholder="Search" type="text" />
            <SearchIcon className="header_searchBtn" />
          </Box>
          <MicIcon />
        </Box>
        <Box className="header_right">
          <VideoCallIcon className="header_icons" />
          <NotificationsIcon className="header_icons" />
          <AppsIcon className="header_icons" />
        </Box>
      </Box>
      <Box className="sidebar">
        <SidebarRow icon={HomeIcon} title="Home" />
        <SidebarRow icon={ExploreIcon} title="Explore" />
        <SidebarRow icon={SubscriptionsIcon} title="Subscription" />
        <Divider />
        <SidebarRow icon={VideoLibraryIcon} title="Library" />
        <SidebarRow icon={HistoryIcon} title="History" />
        <SidebarRow icon={OndemandVideoIcon} title="Your videos" />
        <SidebarRow icon={WatchLaterIcon} title="Watch Later" />
        <SidebarRow icon={ThumbUpIcon} title="Liked Videos" />
        <SidebarRow icon={ExpandMoreOutlinedIcon} title="Show more" />
        <Divider />
        <Typography variant="subtitle1" className="sidebar_heading">
          SUBSCRIPTIONS
        </Typography>
        <SubscriptionRow
          img="https://yt3.ggpht.com/ZZE-4RYOIhFUE29k6wxh7xktniVmSwSdwzOxlJVGJZwN1I0sZuQvovdyk8aHKO31fwQ9bU_aOg=s176-c-k-c0x00ffffff-no-rj-mo"
          name="Soft Suave"
          alt="Soft Suave Logo"
        />
        <SubscriptionRow
          img="https://yt3.googleusercontent.com/ytc/AIdro_kNaumymcxYzV7_n7_VRbQ2TRlIbU2w5csOMN0cH8jiED8=s176-c-k-c0x00ffffff-no-rj-mo"
          name="Code with Harry"
          alt="Code with Harry Logo"
        />
        <SubscriptionRow
          img="https://yt3.googleusercontent.com/ytc/AIdro_lGRc-05M2OoE1ejQdxeFhyP7OkJg9h4Y-7CK_5je3QqFI=s176-c-k-c0x00ffffff-no-rj-mo"
          name="freeCodeCamp"
          alt="freeCodeCamp Logo"
        />
        <SubscriptionRow
          img="https://yt3.ggpht.com/o4MZVi2qdNgx0K7vpEl7DT2PefjROdisZTD7is6TMimF1_DTM49O1ld3iQzTpE5MCj86c-vzav8=s176-c-k-c0x00ffffff-no-rj-mo"
          name="Telusko"
          alt="Telusko Logo"
        />
        <SubscriptionRow
          img="https://yt3.ggpht.com/rsKAERVEXNTq6lbdIHUlm3aVAw4R2D1fPkDz-7sPccu9qwic5EYfSe6VI7tNB5-_r0Ip5_P0=s176-c-k-c0x00ffffff-no-rj-mo"
          name="Gaurav Sen"
          alt="Gaurav Sen Logo"
        />
        <SidebarRow icon={ExpandMoreOutlinedIcon} title="Show more" />

        <Typography variant="subtitle1" className="sidebar_heading">
          MORE FROM YOUTUBE
        </Typography>
        <SidebarRow icon={YouTubeIcon} title="Youtube premium" />
        <SidebarRow icon={TheatersIcon} title="Movies" />
        <SidebarRow icon={SportsEsportsIcon} title="Gaming" />
        <Divider />
        <SidebarRow icon={SettingsIcon} title="Settings" />
        <SidebarRow icon={FlagIcon} title="Report History" />
        <SidebarRow icon={HelpIcon} title="Help" />
        <SidebarRow icon={FeedbackIcon} title="Send feedback" />
        <Divider />
      </Box>
      <Box className="mini_sidebar">
        <Box className="miniDev">
          <HomeIcon />
          <Typography variant="subtitle2">Home</Typography>
        </Box>
        <Box className="miniDev">
          <ExploreIcon />
          <Typography variant="subtitle2">Explore</Typography>
        </Box>
        <Box className="miniDev">
          <SubscriptionsIcon />
          <Typography variant="subtitle2">Subscription</Typography>
        </Box>
        <Box className="miniDev">
          <VideoLibraryIcon />
          <Typography variant="subtitle2">Library</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
