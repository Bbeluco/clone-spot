import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar(){
    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify logo"/>
            <SidebarOption title="Home" Icon={HomeIcon}/>
            <SidebarOption title="Search" Icon={SearchIcon}/>
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>

            <br/>
            <strong className="sidebar_title">PLAYLIST</strong>
            <hr/>

            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} />
            ) )}

            <SidebarOption title="Hip Hop"/>
            <SidebarOption title="Rock"/>
            <SidebarOption title="RnB"/>
        </div>
    )
}

export default Sidebar;