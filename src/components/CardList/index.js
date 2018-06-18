import React from 'react';
import CardItem from '../CardItem';
import GridList from "@material-ui/core/GridList";
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

const CardList = ({ items, changeSelectecVideo, width }) => {
    return (
        <GridList style={{paddingLeft:`${isWidthUp("sm", width) ? 20 : 0}px`}}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">Vídeos</ListSubheader>
            </GridListTile>
            {
                items.map((item, index) => 
                    <GridListTile key={index} style={{height: '100%', padding:`${isWidthUp("sm", width) ? 10 : 0}px`}}>
                        <CardItem changeSelectecVideo={changeSelectecVideo} key={index} video={ item } />
                    </GridListTile>)
            }
        </GridList>
    )
}

export default withWidth()(CardList);