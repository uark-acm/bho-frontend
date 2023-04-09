import { FunctionComponent, useState } from 'react';
import {
    Grid,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './InputBar.css';

type InputBarProps = {
    admin?: boolean;
    searchInput: string;
    onSearch: (value: string) => void;
    idInput?: number | undefined;
    onIdChange?: (value: number | undefined) => void;
};

export const InputBar: FunctionComponent<InputBarProps> = (
    props: InputBarProps
) => {
    const [clothingType, setClothingType] = useState('');
    const [size, setSize] = useState('');

    const handleIdCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '') {
            props.onIdChange && props.onIdChange(undefined);
            return;
        }
        const intValue = parseInt(value, 10);
        if (!isNaN(intValue)) {
            props.onIdChange && props.onIdChange(intValue);
        }
    };

    const handleSearch = (value: string) => {
        props.onSearch(value);
    };

    return (
        <div className="inputBarContainer">
            <Grid container alignItems="center" spacing={0.5}>
                <Grid item xs={props.admin ? 6 : 8} className="searchGrid">
                    <TextField
                        placeholder="Search"
                        value={props.searchInput}
                        onChange={(e) => handleSearch(e.target.value)}
                        fullWidth
                    />
                </Grid>
                {props.admin && (
                    <Grid item xs={2} className="idGrid">
                        <TextField
                            placeholder="ID Code"
                            type="number"
                            value={
                                props.idInput === undefined ? '' : props.idInput
                            }
                            onChange={handleIdCodeChange}
                            inputProps={{ min: 0 }}
                            fullWidth
                        />
                    </Grid>
                )}
                <Grid item xs={1.88}>
                    <FormControl fullWidth>
                        <InputLabel id="clothing-type-label">
                            Clothing Type
                        </InputLabel>
                        <Select
                            labelId="clothing-type-label"
                            id="clothing-type"
                            value={clothingType}
                            label="Clothing Type"
                            onChange={(e) => setClothingType(e.target.value)}
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
                            label="Clothing Type"
                            onChange={(e) => {
                                setSize(e.target.value);
                            }}
                        >
                            <MenuItem>
                                <em>None</em>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={0.5}>
                    <IconButton
                        color="error"
                        className="searchButton"
                        onClick={() =>
                            alert(
                                'this does nothing and idgaf because dynamic filtering is better'
                            )
                        }
                    >
                        <SearchIcon style={{ color: 'white' }} />
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    );
};
