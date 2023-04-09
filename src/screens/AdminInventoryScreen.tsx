import { FunctionComponent } from 'react';
import { Grid } from '@mui/material';
import { BHOItems } from '../mocks/BHOItems.model';
import { ItemCard } from '../components/ItemCard';
import { InputBar } from '../components/InputBar';

interface AdminInventoryScreenProps {}

const AdminInventoryScreen: FunctionComponent<
    AdminInventoryScreenProps
> = () => {
    return (
        <div>
            <InputBar admin />
            <Grid container spacing={2} className="pt-20">
                {BHOItems.map((item, index) => (
                    <Grid item xs={12} sm={4} key={index} alignItems="center">
                        <ItemCard item={item} added={false} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
export default AdminInventoryScreen;
