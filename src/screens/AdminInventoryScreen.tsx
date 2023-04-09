import { FunctionComponent, useState } from 'react';
import { Grid } from '@mui/material';
import { BHOItems } from '../mocks/BHOItems.model';
import { ItemCard } from '../components/ItemCard';
import { InputBar } from '../components/InputBar';
import { BHOItem } from '@uark-acm/bho-data-models/lib';

interface AdminInventoryScreenProps {}

const filterItems = (
    items: BHOItem[],
    name?: string,
    id?: number
): BHOItem[] => {
    return items.filter((item) => {
        if (name && !item.name.toLowerCase().includes(name.toLowerCase())) {
            return false;
        }

        if (id && item.id !== id) {
            return false;
        }

        return true;
    });
};

const AdminInventoryScreen: FunctionComponent<
    AdminInventoryScreenProps
> = () => {
    const [filterName, setFilterName] = useState<string>('');
    // note: BHOItem ids should be > 0
    const [filterId, setFilterId] = useState<number | undefined>();

    const filteredItems = filterItems(BHOItems, filterName, filterId);

    return (
        <div>
            <InputBar
                admin
                searchInput={filterName}
                onSearch={setFilterName}
                idInput={filterId}
                onIdChange={setFilterId}
            />
            <Grid container spacing={2} className="pt-20">
                {filteredItems.map((item, index) => (
                    <Grid item xs={12} sm={4} key={index} alignItems="center">
                        <ItemCard admin item={item} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
export default AdminInventoryScreen;
