import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ContentLoader from 'react-content-loader'

import CardItem from '../CardItem';

class SearchList extends PureComponent {
	render() {
		const { onChangeSelectedVideo } = this.props
		const { videos, totalResults, loading } = this.props;
		return (
			<Grid container spacing={24}>
				{
		        	totalResults > 0 &&
		        	<Grid item xs={12}>
			        	<Button variant="outlined" color="primary" onClick={this.props.onPageChange} >Próxima página</Button>
			        </Grid>
		        }

		        {
		        	loading && [...Array(20)].map(value => (
		        		<Grid item xs={6} key={value}>
							<ContentLoader 
								height={210}
								width={367.25}>
								<rect x="0" y="20" rx="0" ry="0" width="350" height="140" /> 
								<rect x="0" y="170" rx="0" ry="0" width="350" height="25" /> 
								<rect x="0" y="200" rx="0" ry="0" width="175" height="12" />
							</ContentLoader>
						</Grid>
		        	))
		        }

				{videos.map(value => (
					<Grid item xs={6} key={value.id.videoId}>
						<CardItem video={value} onChangeSelectedVideo={onChangeSelectedVideo} />
		            </Grid>
		        ))}
		        {
		        	totalResults > 0 &&
		        	<Grid item xs={12}>
			        	<Button variant="outlined" color="primary" onClick={this.props.onPageChange} >Próxima página</Button>
			        </Grid>
		        }
            </Grid>
		);
	}
}

export default SearchList;