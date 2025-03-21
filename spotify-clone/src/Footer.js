import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider} from '@material-ui/core';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { useDataLayerValue } from './DataLayer';

function Footer({ spotify }) {
    const [{ item }, dispatch] = useDataLayerValue();
    
    return(
        <div class="footer">
            <div className="footer_left">
                <img className="album_cover" src={item?.album.images[0].url} alt={item?.name} />
                <div className="footer_songInfo">
                    <p>{item?.name}</p>
                    <p>{item?.artists.map(artist => artist.name).join(',')}</p>
                </div>
            </div>

            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon className="footer_icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer_icon"/>
                <SkipNextIcon className="footer_icon" />
                <RepeatIcon className="footer_green" />
            </div>

            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer;