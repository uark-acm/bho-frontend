import {
    Modal,
    Box,
    CardMedia,
    Typography,
    IconButton,
    Button,
    Card,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from '@mui/material';
import { BHOItem } from '@uark-acm/bho-data-models/lib';
import { FunctionComponent, useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import './ViewItemModal.css';
import { useAppDispatch } from '../redux/redux-config/hooks';
import { removeFromCart, addToCart } from '../redux/actions/Cart.actions';
import DeleteIcon from '@mui/icons-material/Delete';

type ViewItemModalProps = {
    item: BHOItem;
    admin?: boolean;
    added?: boolean;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ViewItemModal: FunctionComponent<ViewItemModalProps> = (
    props: ViewItemModalProps
) => {
    const [isAdded, setIsAdded] = useState(props.added);
    const dispatch = useAppDispatch();

    const handleAddClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        dispatch(isAdded ? removeFromCart(props.item) : addToCart(props.item));
        setIsAdded(!isAdded);
    };

    const [formState, setFormState] = useState({
        name: props.item.name,
        description: props.item.description,
        size: props.item.size,
    });

    const handleFormSubmit = (event: React.MouseEvent) => {
        event.stopPropagation();
        // Update the object with the new values
        console.log('Form submitted with values:', formState);
        // @todo update object in backend
    };

    const handleDelete = (event: React.MouseEvent) => {
        event.stopPropagation();
        // Perform the delete operation here
        console.log(`Delete item: ${props.item.id}`);
        // @todo delete object in backend
    };

    return (
        <Modal
            className="vim-modal"
            open={props.open}
            onClose={() => {
                props.setOpen(false);
            }}
            disableAutoFocus={true}
        >
            <Card className="vim-card">
                <CardMedia
                    className="vim-card-media"
                    image={props.item.image}
                    title="Image"
                />
                <Box className="vim-card-content">
                    {props.admin ? (
                        <TextField
                            variant="outlined"
                            value={formState.name}
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    name: e.target.value,
                                })
                            }
                            fullWidth
                            InputProps={{
                                style: {
                                    fontWeight: 600,
                                    fontSize: '30px',
                                    flex: 'flex',
                                },
                            }}
                        />
                    ) : (
                        <Typography variant="h4" align="center">
                            {props.item.name}
                        </Typography>
                    )}
                    {props.admin ? (
                        <TextField
                            variant="outlined"
                            value={formState.description}
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    description: e.target.value,
                                })
                            }
                            fullWidth
                            multiline
                        />
                    ) : (
                        <Typography variant="body1" align="center">
                            {props.item.description}
                        </Typography>
                    )}
                    <Box className="vim-card-btns">
                        {props.admin ? (
                            <FormControl fullWidth variant="outlined">
                                <InputLabel>Size</InputLabel>
                                <Select
                                    value={formState.size}
                                    onChange={(e) =>
                                        setFormState({
                                            ...formState,
                                            size: e.target.value,
                                        })
                                    }
                                    label="Size"
                                >
                                    {/* @todo Customize the options based on the available sizes */}
                                    <MenuItem value="S">S</MenuItem>
                                    <MenuItem value="M">M</MenuItem>
                                    <MenuItem value="L">L</MenuItem>
                                    <MenuItem value="XL">XL</MenuItem>
                                </Select>
                            </FormControl>
                        ) : (
                            <Button
                                variant="outlined"
                                style={{
                                    borderRadius: '40px',
                                    color: '#A51E36',
                                    borderColor: '#A51E36',
                                    borderWidth: '4px',
                                }}
                            >
                                {props.item.size}
                            </Button>
                        )}
                        <Button
                            variant="contained"
                            style={{
                                borderRadius: '40px',
                                backgroundColor: '#A51E36',
                            }}
                            disabled={!props.admin && !props.item.in_stock}
                            onClick={
                                props.admin ? handleFormSubmit : handleAddClick
                            }
                        >
                            {props.admin
                                ? 'Save'
                                : props.item.in_stock
                                ? isAdded
                                    ? 'Remove from Cart'
                                    : 'Add to Cart'
                                : 'Out of Stock'}
                        </Button>
                        {props.admin && (
                            <IconButton
                                style={{
                                    color: '#A51E36',
                                    marginLeft: '16px',
                                }}
                                onClick={handleDelete}
                            >
                                <DeleteIcon />
                            </IconButton>
                        )}
                    </Box>
                </Box>
                <IconButton
                    className="vim-close-btn"
                    onClick={() => props.setOpen(false)}
                >
                    <ClearIcon />
                </IconButton>
            </Card>
        </Modal>
    );
};
