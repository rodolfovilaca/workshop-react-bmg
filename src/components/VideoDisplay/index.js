import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { ChannelSearch } from '../../utils/YoutubeApiSearch';
import { API_KEY } from '../../constants';
import './styles.css';

class VideoDisplay extends Component {
  state = {
    avatarURL: ''
  };
  componentDidMount() {
    ChannelSearch(
      {
        key: API_KEY,
        id: this.props.video.snippet.channelId,
        maxResults: 1
      },
      data => {
        console.log(data);
        this.setState({ avatarURL: data.snippet.thumbnails.high.url });
      }
    );
  }
  componentDidUpdate(prevProps) {
    if (prevProps.video !== this.props.video) {
      ChannelSearch(
        {
          key: API_KEY,
          id: this.props.video.snippet.channelId,
          maxResults: 1
        },
        data => {
          console.log(data);
          this.setState({ avatarURL: data.snippet.thumbnails.high.url });
        }
      );
    }
  }
  render() {
    const videoId = this.props.video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    const { snippet } = this.props.video;
    return (
      <Card>
        <div className="embed-container">
          <iframe
            style={{ width: '100%', height: '100%' }}
            title={snippet.title}
            src={url}
            allowFullScreen
          />
        </div>
        <CardContent>
          <Grid container wrap="nowrap" spacing={16}>
            <Grid item className="avatar-container">
              <Avatar src={this.state.avatarURL} />
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
