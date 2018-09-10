import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Navbar from '../Navbar';
import VideoDisplay from '../VideoDisplay'
import SearchList from '../SearchList';
import { API_KEY } from '../../constants'
import { YoutubeSearch } from '../../utils/YoutubeApiSearch'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class YoutubePage extends PureComponent {
	state = {
		items: [],
		selectedVideo: undefined,
		loadingCards: false,
		totalResults: 0,
		nextPageToken: null,
		term: ''
	};

	onSubmit = (term) => {
		this.setState({
			nextPageToken: null,
			term: term
		}, () => this.searchVideos());
	}

	nextPage = () => {
		this.searchVideos();
	}

	searchVideos = () => {
		this.setState({ loadingCards: true },
			() => {
				YoutubeSearch({
						key: API_KEY,
						q: this.state.term,
						maxResults: 20,
						pageToken: this.state.nextPageToken
					},
					(data, nextPageToken, totalResults) => {
						setTimeout(() => {
								this.setState({
								loadingCards: false,
								selectedVideo: data[0],
								items: data,
								nextPageToken: nextPageToken,
								totalResults: totalResults
							});
						}, 2000);
					}
				)
			});
	}

	changeSelectedVideo = (video) => {
		this.setState({
				selectedVideo: video,
			});
	}

	render() {
		const { classes } = this.props;
		const { items, selectedVideo, totalResults, loadingCards } = this.state
		return (
			<div className={classes.root}>
				<Grid container spacing={24}>
					<Navbar onSubmit={this.onSubmit}/>
					<Grid item xs={6}>
						{
							selectedVideo && <VideoDisplay video={selectedVideo} />
						}
					</Grid>
					<Grid item xs={6}>
						<SearchList videos={items} loading={loadingCards} totalResults={totalResults} onPageChange={this.nextPage} onChangeSelectedVideo={this.changeSelectedVideo} />
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(styles)(YoutubePage);