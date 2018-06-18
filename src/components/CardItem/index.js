import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ListItem from "@material-ui/core/ListItem";
import CardMedia from "@material-ui/core/CardMedia";

const CardItem = ({changeSelectecVideo, video}) => {
    return (
        video &&
        (<ListItem onClick={() => changeSelectecVideo(video)}>
            <Card style={{maxWidth: 350}}>
                <CardMedia
                    style={{height: 0, paddingTop: "56.25%"}}
                    image={video.snippet.thumbnails.high.url}
                    title={video.snippet.title}
                />
                <CardContent>
                    <Typography variant="title">{video.snippet.title}</Typography>
                    <Typography variant="subheading" color="textSecondary">
                        {video.snippet.channelTitle}
                    </Typography>
                </CardContent>
            </Card>
        </ListItem>)
    )
}

export default CardItem;