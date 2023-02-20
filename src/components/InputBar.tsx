import { FunctionComponent, useState } from 'react'
import {
    Grid,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    IconButton,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import './InputBar.css'

type InputBarProps = {}

export const InputBar: FunctionComponent<InputBarProps> = (
    props: InputBarProps
) => {
    const [clothingType, setClothingType] = useState('')
    const [size, setSize] = useState('')
    const [searchInput, setSearchInput] = useState('')

    return (
        <div className="inputBarContainer">
            <Grid container alignItems="center" spacing={0.5}>
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
                        <InputLabel id="clothing-type-label">
                            Clothing Type
                        </InputLabel>
                        <Select
                            labelId="clothing-type-label"
                            id="clothing-type"
                            value={clothingType}
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
                            onChange={(e) => {
                                setSize(e.target.value)
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
                        onClick={() => alert('pls add prettier jack')}
                    >
                        <SearchIcon style={{ color: 'white' }} />
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    )
}
