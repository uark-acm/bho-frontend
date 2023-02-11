import { FunctionComponent, useState } from 'react';
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
import { BHOItems } from '../../mocks/BHOItems.model';
import ItemCard from '../ItemCard';
import SearchIcon from '@mui/icons-material/Search';
import './ViewInventoryScreen.css';

interface ViewInventoryScreenProps {}
const ViewInventoryScreen: FunctionComponent < ViewInventoryScreenProps > = () => {
    const [clothingType, setClothingType] = useState('');
    const [size, setSize] = useState('');
    const [searchInput, setSearchInput] = useState('');
    
    return (
    <div>
        <div className="inputBarContainer">
            <Grid container alignItems="center" spacing={.5}>
                <Grid item xs={8} className="searchGrid">
                    <TextField
                        placeholder="Search"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={1.88}>
                    <FormControl fullWidth>
                        <InputLabel id="clothing-type-label">Clothing Type</InputLabel>
                        <Select
                            labelId="clothing-type-label"
                            id="clothing-type"
                            value={clothingType}
                            onChange={(e)=>setClothingType(e.target.value)}
                        >
                            <MenuItem>
                                <em>None</em>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={1.291}>
                    <FormControl fullWidth>
                        <InputLabel id="size-label">Size</InputLabel>
                        <Select
                            labelId="size-label"
                            id="size"
                            value={size}
                            onChange={(e)=>{setSize('test')}}
                        >
                            <MenuItem>
                                <em>None</em>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={.5}>
                    <IconButton color="error" className="searchButton" onClick={() => alert('pls add prettier jack')}>
                        <SearchIcon style={{ color:"white" }}/>
                    </IconButton>
                </Grid>
            </Grid>
        </div>
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