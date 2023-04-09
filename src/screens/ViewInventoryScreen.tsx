import { FunctionComponent, useState } from 'react';
import { Grid } from '@mui/material';
import { BHOItems } from '../mocks/BHOItems.model';
import { ItemCard } from '../components/ItemCard';
import { InputBar } from '../components/InputBar';
import { BHOItem } from '@uark-acm/bho-data-models/lib';

interface ViewInventoryScreenProps {}

const filterItems = (items: BHOItem[], name?: string): BHOItem[] => {
    return items.filter((item) => {
        if (name && !item.name.toLowerCase().includes(name.toLowerCase())) {
            return false;
        }

        return true;
    });
};

const ViewInventoryScreen: FunctionComponent<ViewInventoryScreenProps> = () => {
    const [filterName, setFilterName] = useState<string>('');
    const filteredItems = filterItems(BHOItems, filterName);

    return (
        <div>
            <InputBar searchInput={filterName} onSearch={setFilterName} />
            <Grid container spacing={2} className="pt-20">
                {filteredItems.map((item, index) => (
                    <Grid item xs={12} sm={4} key={index} alignItems="center">
                        <ItemCard item={item} added={false} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
export default ViewInventoryScreen;
