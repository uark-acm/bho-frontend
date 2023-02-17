import React, { useState, FunctionComponent } from "react";
import { useFormControl } from '@mui/material/FormControl';
import { Grid, Container, Select, TextField } from "@mui/material";
import {Box, BoxProps} from "@mui/system";
import {alpha, styled} from "@mui/material/styles"
import { Margin } from "@mui/icons-material";
import './NewItemFormScreen.css';



 

type NewItemFormScreenProps = {}



const NewItemFormScreen: FunctionComponent<NewItemFormScreenProps> = (props: NewItemFormScreenProps) => {
    const [itemValues, setItemValues] = useState({
        itemName: "",
        itemCategory: "",
        itemSize: "",
        itemDescription: "",
        itemPhoto: "",
    })

    const TextFieldBoxesSx = {mb: '10%', ml: '5%'};

    const changeHandler = (e: React.ChangeEvent<any>) => {
        setItemValues({...itemValues, [e.target.id]: e.target.value})
        console.log(e.target.id, e.target.value)
    }

    const itemCategories = ['Category 1', 'Category 2', 'Category 3'];
    const itemSizes = ['S', 'M', 'L', 'XL'];

    return(
        <Grid container spacing={10}>
            <Grid item xs={4}>
                <Box sx={{height: '20%', mt: '20%', ml:'5%'}}>
                    <label className="gray-label">Admin / Add Inventory</label>
                </Box>
            
                <form name="createClothingItemForm">
                    <Box sx={TextFieldBoxesSx}>
                        <label >Item Name</label>
                        <TextField size ="small" variant="filled" id="itemName" name="itemName" onChange={changeHandler} required hiddenLabel fullWidth ></TextField>
                    </Box>
                    
                    <Box sx={TextFieldBoxesSx}>
                        <label>Item Category</label>
                        <TextField size="small" select id="itemCategory" name="itemCategory" variant="filled" onChange={changeHandler}  hiddenLabel fullWidth>
                            <Select required></Select> 
                        </TextField>
                    </Box>

                    <Box sx={TextFieldBoxesSx}>
                        <label>Item Size</label> 
                        <TextField  size="small" id="itemSize" name="itemSize" select  variant="filled" hiddenLabel fullWidth onChange={changeHandler}>
                            <Select required></Select>
                        </TextField> <br />
                    </Box>
                    
                    <Box sx={TextFieldBoxesSx}>
                        <label>Description</label>
                        <TextField size="small" variant="filled" id="itemDescription" name="itemDescription" onChange={changeHandler} required  multiline minRows= {4} hiddenLabel fullWidth></TextField> <br />
                    </Box>
                </form>
            </Grid>

            <Grid item xs = {2} sx={{ml:'10%', mt:'15%', }}>
                <Box  maxWidth="sm" sx={{display: 'flex', width: '100%', height: '50%', alignItems: 'center',justifyContent: 'center', margin: 'auto',  p: 2, border: '2px dashed grey' , borderRadius: 3, fontSize: '15px', flexDirection: 'column'}}>
                    <label>Select an item photo and drop here</label>
                    <label className="gray-label">JPG, PNG or PDF, file size no more than 10MB</label>
                    <button>Select File</button>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <button className="add-item-button" >Add Item </button> 
                </Box>
                
            </Grid>
    </Grid> 
    )
}

export default NewItemFormScreen;