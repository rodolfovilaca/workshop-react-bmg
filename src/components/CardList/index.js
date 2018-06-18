import React from 'react';
import CardItem from '../CardItem';
import GridList from "@material-ui/core/GridList";
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';

const CardList = ({ items, changeSelectecVideo }) => {
    return (
        <GridList  cellHeight={350}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">Vídeos</ListSubheader>
            </GridListTile>
            {
                items.map((item, index) => 
                    <GridListTile key={index}>
                        <CardItem changeSelectecVideo={changeSelectecVideo} key={index} video={ item } />
                    </GridListTile>)
            }
        </GridList>
    )
}

export default CardList;