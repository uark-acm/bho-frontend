import React, { FunctionComponent } from 'react';
import { BHOItems } from '../../mocks/BHOItems.model';
import { Grid } from '@mui/material';
import ItemCard from '../ItemCard';

interface ViewInventoryScreenProps {}

const ViewInventoryScreen: FunctionComponent<ViewInventoryScreenProps> = () => {
  return (
    <div>
        <Grid container spacing={2}>
        {BHOItems.map((item, index) => (
            <Grid item xs={12} sm={4} key={index} alignItems="center">
            <ItemCard item={item}/>
            </Grid>
        ))}
        </Grid>
    </div>
  );
};

export default ViewInventoryScreen;
