import React, { PureComponent } from 'react';
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import './styles.css';

class VideoDisplay extends PureComponent {
	render() {
		const videoId = this.props.video.id.videoId;
		const url =  `https://www.youtube.com/embed/${videoId}`;
		const { snippet } = this.props.video;

		return (
			<Card>
				
				<div className='embed-container'>
					<iframe style={{width: "100%", height: "100%"}} title={snippet.title} src={url} allowFullScreen />
				</div>
				
				<CardContent style={{ backgroundColor: 'orange' }}>
                    <Grid container wrap="nowrap" spacing={16}>
                        <Grid item className='avatar-container'>
                            Avatar
                        </Grid>
                        <Grid item xs>
                            <Typography variant="headline">{snippet.title}</Typography>
                            <Typography variant="subheading" color="textSecondary">
                                {snippet.channelTitle}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
			</Card>
		);
	}
}

export default VideoDisplay;