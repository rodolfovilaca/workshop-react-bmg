import React, { Component, Fragment } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavBar from '../../components/NavBar';
import { API_KEY } from '../../constants';
import CardList from '../../components/CardList';
import VideoDisplay from '../../components/VideoDisplay';
import Grid from '@material-ui/core/Grid';
import { YoutubeSearch } from '../../utils/YoutubeApiSearch';
import EmptyCardList from '../../components/EmptyCardList';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff5a37',
      main: '#ff0202',
      dark: '#c20000',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#ffffff',
      contrastText: '#ffffff'
    },
    MuiInput: {}
  }
});

class YoutubePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      selectedVideo: undefined,
      loadingCards: false
    };
  }

  onSubmit = term => {
    this.setState({ loadingCards: true });
    YoutubeSearch(
      {
        key: API_KEY,
        q: term,
        maxResults: 25
      },
      data => {
        console.log(data);
        this.setState({ selectedVideo: data[0] });
        return setTimeout(
          () => this.setState({ items: data, loadingCards: false }),
          10000
        );
      }
    );
  };

  changeSelectecVideo = video => {
    console.log('==============>', video);
    this.setState({ selectedVideo: video });
  };

  render() {
    const { items, selectedVideo, loadingCards } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <NavBar color="primary" position="static" onSubmit={this.onSubmit} />
        <div style={{ padding: 20 }}>
          <Grid container spacing={24} justify="flex-end">
            {selectedVideo && (
              <Grid item xs={12} sm={6} style={{ marginTop: '20px' }}>
                <VideoDisplay video={selectedVideo} />
              </Grid>
            )}
            {loadingCards ? (
              <Grid item xs={12} sm={6}>
                <EmptyCardList
                  items={items}
                  changeSelectecVideo={this.changeSelectecVideo}
                />
              </Grid>
            ) : (
              items.length > 0 && (
                <Grid item xs={12} sm={6}>
                  <CardList
                    items={items}
                    changeSelectecVideo={this.changeSelectecVideo}
                  />
                </Grid>
              )
            )}
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default YoutubePage;
