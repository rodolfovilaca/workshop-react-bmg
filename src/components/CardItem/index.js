import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './styles.css';

class CardItem extends PureComponent {
	render() {
		const { video, onChangeSelectedVideo } = this.props;
		return (
			video &&

			<div className="card-item" onClick={() => onChangeSelectedVideo(video) } >
				<CardMedia
					style={{height: 0, paddingTop: "56.25%"}}
					image={video.snippet.thumbnails.high.url}
					title={video.snippet.title}
				/>
			
				<CardContent style={{ backgroundColor: 'orange' }}>
					<Typography variant="title" style={{fontSize:"1.0rem"}}>{video.snippet.title}</Typography>
					<Typography variant="subheading" style={{fontSize:"0.7rem"}} color="textSecondary">
						{video.snippet.channelTitle}
					</Typography>
				</CardContent>
			</div>
		);
	}
}

export default CardItem;