import { FunctionComponent } from 'react';
import { Grid } from '@mui/material';
import { BHOItems } from '../../mocks/BHOItems.model';
import { ItemCard } from '../ItemCard';
import { InputBar } from '../InputBar';

interface ViewInventoryScreenProps {}
const ViewInventoryScreen: FunctionComponent < ViewInventoryScreenProps > = () => {
    return (
    <div>
        <InputBar/>
        <Grid container spacing={2}>
            {BHOItems.map((item, index) => (
                <Grid item xs={12} sm={4} key={index} alignItems="center">
                    <ItemCard item={item}/>
                </Grid>
            ))}
        </Grid>
    </div>);
};
export default ViewInventoryScreen;