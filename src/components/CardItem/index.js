import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import './styles.css';

const CardItem = ({ changeSelectecVideo, video }) => {
  return (
    video && (
      <div className="card-item" onClick={() => changeSelectecVideo(video)}>
        <CardMedia
          style={{ height: 0, paddingTop: '56.25%' }}
          image={video.snippet.thumbnails.high.url}
          title={video.snippet.title}
        />
        <CardContent>
          <Typography variant="title" style={{ fontSize: '1.0rem' }}>
            {video.snippet.title}
          </Typography>
          <Typography
            variant="subheading"
            style={{ fontSize: '0.7rem' }}
            color="textSecondary"
          >
            {video.snippet.channelTitle}
          </Typography>
        </CardContent>
      </div>
    )
  );
};

export default CardItem;
