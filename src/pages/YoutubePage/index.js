import React, { Component, Fragment } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavBar from '../../components/NavBar';
import YTSearch from 'youtube-api-search';
import { API_KEY } from '../../constants';
import CardList from '../../components/CardList';
import VideoDisplay from '../../components/VideoDisplay';
import Grid from '@material-ui/core/Grid';
import YoutubeSearch from '../../utils/YoutubeApiSearch';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#ff5a37",
            main: "#ff0202",
            dark: "#c20000",
            contrastText: "#ffffff"
        },
        secondary: {
            light: "#ffffff",
            main: "#ffffff",
            dark: "#ffffff",
            contrastText: "#ffffff"
        },
        MuiInput: {
            
        }
    }
});

class YoutubePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            selectedVideo: {}
        }
    }

    onSubmit = (term) => {
        YoutubeSearch({
            key: API_KEY,
            maxResults: 25,
            term
        },
        (data) => {
            console.log(data)
            return this.setState({items: data, selectedVideo: data[0] })
        })
    }

    changeSelectecVideo = (video) => {
        console.log('==============>',video)
        this.setState({ selectedVideo: video });
    }

    render(){
        const { items, selectedVideo } = this.state;
        return (
            <MuiThemeProvider theme={theme}>
                <NavBar color="primary" position="static" onSubmit={this.onSubmit} />
                <div style={{ padding: 20 }}>
                    <Grid container spacing={24}>
                        {
                            items.length > 0 && (
                            <Fragment>
                                <Grid item xs={12} sm={6} style={{marginTop:'20px'}}>
                                    <VideoDisplay {...selectedVideo}/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CardList items={items} changeSelectecVideo={this.changeSelectecVideo} />
                                </Grid>
                            </Fragment>)
                        }
                    </Grid>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default YoutubePage;