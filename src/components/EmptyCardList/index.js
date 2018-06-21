import React from 'react';
import EmptyCardItem from '../EmptyCardItem';
import GridList from "@material-ui/core/GridList";
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

const EmptyCards = ({width}) => {
    let arr = []
    for(let i=0; i < 25;i++){
        arr.push(<GridListTile key={i} style={{width: '50%',height: '100%', padding:`${isWidthUp("sm", width) ? 10 : 0}px`}}>
            <EmptyCardItem />
        </GridListTile>)
    }
    return arr
}

const EmptyCardList = ({width}) => {
    return (
        <GridList style={{paddingLeft:`${isWidthUp("sm", width) ? 20 : 0}px`}}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">Vídeos</ListSubheader>
            </GridListTile>
            {
                <EmptyCards width={width}/>
            }
        </GridList>
    )
}

export default withWidth()(EmptyCardList);