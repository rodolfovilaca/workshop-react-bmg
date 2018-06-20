import React from 'react';
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from '@material-ui/core/CardContent';
import './styles.css';

const EmptyCardItem = (props) => {
    return (
        <div className="card-item">
            <CardMedia
                style={{height: 0, paddingTop: "56.25%", backgroundColor: '#E0E0E0'}}
            />
            <CardContent>
                <div style={{backgroundColor: '#E0E0E0', width: '200px', height: '30px'}}>
                </div>
                <div style={{backgroundColor: '#E0E0E0', width: '150px', height: '30px', marginTop: '20px'}}>
                </div>
            </CardContent>
        </div>
    )
}

export default EmptyCardItem;