import React from 'react';
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import './styles.css';

const VideoDisplay = (props) => {
    const videoId = props.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <Card>
            <div className='embed-container'>
                <iframe style={{width: "100%", height: "100%"}} src={url} allowFullScreen />
            </div> 
            <CardContent>
                <Typography variant="headline">{props.snippet.title}</Typography>
                <Typography variant="subheading" color="textSecondary">
                    {props.snippet.channelTitle}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default VideoDisplay;