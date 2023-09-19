import React, { useState, FunctionComponent } from 'react';
import { Grid, Select, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import './NewItemFormScreen.css';
import { useFilePicker } from 'use-file-picker';
import { toast } from 'react-toastify';

//TODO: add form validation, get rid of unecessary styles, remove mui stuff, add image viewer

type NewItemFormScreenProps = {};

const NewItemFormScreen: FunctionComponent<NewItemFormScreenProps> = (
    props: NewItemFormScreenProps
) => {
    const [itemValues, setItemValues] = useState({
        itemName: '',
        itemCategory: '',
        itemSize: '',
        itemDescription: '',
    });

    const [itemPhoto, setItemPhoto] = useState<File | undefined>();
    //const [itemURL, setItemURL] = useState<string | undefined>();

    const [openFileSelector, { filesContent, loading, errors }] = useFilePicker(
        {
            readAs: 'DataURL',
            accept: 'image/*',
            multiple: true,
            onFilesSelected: ({ plainFiles, filesContent, errors }) => {
                // this callback is always called, even if there are errors
                console.log(
                    'onFilesSelected',
                    plainFiles,
                    filesContent,
                    errors
                );
            },
            onFilesRejected: ({ errors }) => {
                // this callback is called when there were validation errors
                console.log('onFilesRejected', errors);
                toast.success('File failed with following error: ' + errors);
            },
            onFilesSuccessfulySelected: ({ plainFiles, filesContent }) => {
                // this callback is called when there were no validation errors
                console.log(
                    'onFilesSuccessfulySelected',
                    plainFiles,
                    filesContent
                );
                toast.success('File uploaded successfully');
                setItemPhoto(plainFiles[0]);
                //const objectUrl = URL.createObjectURL(plainFiles[0]);
            },
        }
    );

    const textFieldBoxesSx = { mb: '10%', ml: '5%' };

    const changeHandler = (e: React.ChangeEvent<any>) => {
        setItemValues({ ...itemValues, [e.target.id]: e.target.value });
    };

    return (
        <Grid container spacing={10}>
            <Grid item xs={4}>
                <Box sx={{ mb: '10%', mt: '10%', ml: '5%' }}>
                    <label className="gray-label">Admin / Add Inventory</label>
                </Box>

                <form name="createClothingItemForm">
                    <Box sx={textFieldBoxesSx}>
                        <label>Item Name</label>
                        <TextField
                            size="small"
                            variant="filled"
                            id="itemName"
                            name="itemName"
                            onChange={changeHandler}
                            required
                            hiddenLabel
                            fullWidth
                        ></TextField>
                    </Box>

                    <Box sx={textFieldBoxesSx}>
                        <label>Item Category</label>
                        <TextField
                            size="small"
                            select
                            id="itemCategory"
                            name="itemCategory"
                            variant="filled"
                            onChange={changeHandler}
                            hiddenLabel
                            fullWidth
                        ></TextField>
                    </Box>

                    <Box sx={textFieldBoxesSx}>
                        <label>Item Size</label>
                        <TextField
                            size="small"
                            id="itemSize"
                            name="itemSize"
                            select
                            variant="filled"
                            hiddenLabel
                            fullWidth
                            onChange={changeHandler}
                        ></TextField>{' '}
                        <br />
                    </Box>

                    <Box sx={textFieldBoxesSx}>
                        <label>Description</label>
                        <TextField
                            size="small"
                            variant="filled"
                            id="itemDescription"
                            name="itemDescription"
                            onChange={changeHandler}
                            required
                            multiline
                            minRows={4}
                            hiddenLabel
                            fullWidth
                        ></TextField>{' '}
                        <br />
                    </Box>
                </form>
            </Grid>

            <Grid minWidth={300} item xs={4} sx={{ ml: '10%', mt: '7.48%' }}>
                <Box
                    maxWidth="sm"
                    sx={{
                        display: 'flex',
                        width: '100%',
                        height: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 'auto',
                        p: 2,
                        border: '2px dashed grey',
                        borderRadius: 3,
                        fontSize: '15px',
                        flexDirection: 'column',
                    }}
                >
                    <label>
                        {itemPhoto
                            ? (itemPhoto as File).name
                            : 'Select a photo for this item'}
                    </label>
                    <label className="gray-label">
                        JPG, PNG or PDF, file size no more than 10MB
                    </label>
                    <Button
                        variant="outlined"
                        onClick={() => openFileSelector()}
                    >
                        Select File
                    </Button>
                </Box>
                <Box
                    maxWidth="sm"
                    sx={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 'auto',
                    }}
                >
                    <button
                        className="add-item-button cursor-pointer"
                        onClick={() => console.log('submit')}
                    >
                        Add Item{' '}
                    </button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default NewItemFormScreen;
