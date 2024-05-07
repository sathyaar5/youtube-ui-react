import React from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import Home from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { History, OndemandVideo, WatchLater, ThumbUp, ExpandMoreOutlined, YouTube, Theaters, SportsEsports, Help, Feedback, Settings, Flag } from '@mui/icons-material';

import YoutubeLogo from '../components/Youtube-logo.png'; 
import SidebarRow from './SidebarRow';
import SubscriptionRow from './SubscriptionRow';

function Header() {
    const toggleSidebar = () =>{
        const sidebar = document.querySelector(".sidebar");
        const MiniSidebar = document.querySelector(".mini_sidebar");
        if(sidebar){
            sidebar.classList.toggle('active');
        }
        if(MiniSidebar) {
            MiniSidebar.classList.toggle('active');
        }
    }
   
    return (
        <div className='parent_header'>
        <div className='header'>
            <div className='header_left'>
                <div onClick={toggleSidebar}><MenuIcon /></div>
                {/* Use the imported logo image */}
                <img className='header_logo' src={YoutubeLogo} alt="YouTube Logo" />
            </div>
            <div className='header_input'>
                <div className='header_middle'>
                    <input className='SearchInput' placeholder='Search' type='text' />
                    <SearchIcon className='header_searchBtn'/>
                </div>
                <MicIcon />
            </div>
            <div className='header_right'>
                <VideoCallIcon className='header_icons'/>
                <NotificationsIcon className='header_icons'/>
                <AppsIcon className='header_icons'/>
            </div>
        </div>
        <div className='sidebar'>
        <SidebarRow icon = {Home} title="Home"/>
        <SidebarRow icon = {ExploreIcon} title="Explore"/>
        <SidebarRow icon = {SubscriptionIcon} title="Subscription"/>
        <hr></hr>
        <SidebarRow icon = {VideoLibraryIcon} title="Library"/>
        <SidebarRow icon = {History} title="History"/>
        <SidebarRow icon = {OndemandVideo} title="Your videos"/>
        <SidebarRow icon = {WatchLater} title="Watch Later"/>
        <SidebarRow icon = {ThumbUp} title="Liked Videos"/>
        <SidebarRow icon = {ExpandMoreOutlined} title="Show more"/>
        <hr/>
        <h4 className='sidebar_heading'>SUBSCRIPTIONS</h4>
        <SubscriptionRow img="https://yt3.ggpht.com/ZZE-4RYOIhFUE29k6wxh7xktniVmSwSdwzOxlJVGJZwN1I0sZuQvovdyk8aHKO31fwQ9bU_aOg=s176-c-k-c0x00ffffff-no-rj-mo" name="Soft Suave" alt="Soft Suave Logo" />
        <SubscriptionRow img="https://yt3.googleusercontent.com/ytc/AIdro_kNaumymcxYzV7_n7_VRbQ2TRlIbU2w5csOMN0cH8jiED8=s176-c-k-c0x00ffffff-no-rj-mo" name="Code with Harry" alt="Code with Harry Logo" />
        <SubscriptionRow img="https://yt3.googleusercontent.com/ytc/AIdro_lGRc-05M2OoE1ejQdxeFhyP7OkJg9h4Y-7CK_5je3QqFI=s176-c-k-c0x00ffffff-no-rj-mo" name="freeCodeCamp" alt="freeCodeCamp Logo" />
        <SubscriptionRow img="https://yt3.ggpht.com/o4MZVi2qdNgx0K7vpEl7DT2PefjROdisZTD7is6TMimF1_DTM49O1ld3iQzTpE5MCj86c-vzav8=s176-c-k-c0x00ffffff-no-rj-mo" name="Telusko" alt="Telusko Logo" />
        <SubscriptionRow img="https://yt3.ggpht.com/rsKAERVEXNTq6lbdIHUlm3aVAw4R2D1fPkDz-7sPccu9qwic5EYfSe6VI7tNB5-_r0Ip5_P0=s176-c-k-c0x00ffffff-no-rj-mo" name="Gaurav Sen" alt="Gaurav Sen Logo" />
        <SidebarRow icon = {ExpandMoreOutlined} title="Show more"/>


        <h4 className='sidebar_heading'>MORE FROM YOUTUBE</h4>
        <SidebarRow icon = {YouTube} title="Youtube premium"/>
        <SidebarRow icon = {Theaters} title="Movies"/>
        <SidebarRow icon = {SportsEsports} title="Gaming"/>
        <hr/>
        <SidebarRow icon = {Settings} title="Settings"/>
        <SidebarRow icon = {Flag} title="Report History"/>
        <SidebarRow icon = {Help} title="Help"/>
        <SidebarRow icon = {Feedback} title="Send feedback"/>
        <hr></hr>
        </div>
        <div className='mini_sidebar'>
            <div className='miniDev'>
                <Home/>
                <p>Home</p>
            </div>
            <div className='miniDev'>
                <ExploreIcon/>
                <p>Explore</p>
            </div>
            <div className='miniDev'>
                <SubscriptionIcon/>
                <p>Subscription</p>
            </div>
            <div className='miniDev'>
                <VideoCallIcon/>
                <p>Library</p>
            </div>
        </div>
        </div>
        
    );
}

export default Header;