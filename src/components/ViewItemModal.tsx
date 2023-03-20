import {
    Modal,
    Box,
    CardMedia,
    Typography,
    IconButton,
    Button,
    Card,
} from '@mui/material';
import { BHOItem } from '@uark-acm/bho-data-models/lib';
import { FunctionComponent, useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import './ViewItemModal.css';
import { useAppDispatch } from '../redux/redux-config/hooks';
import { removeFromCart, addToCart } from '../redux/actions/Cart.actions';

type ViewItemModalProps = {
    item: BHOItem;
    added: boolean;
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
                    <Typography
                        variant="h5"
                        component="h2"
                        style={{
                            fontWeight: 600,
                            fontSize: '30px',
                            flex: 'flex',
                        }}
                    >
                        {props.item.name}
                    </Typography>
                    <Typography variant="body1" component="p">
                        {props.item.description}
                    </Typography>
                    <Box className="vim-card-btns">
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
                        <Button
                            variant="contained"
                            style={{
                                borderRadius: '40px',
                                backgroundColor: '#A51E36',
                            }}
                            disabled={!props.item.in_stock}
                            onClick={handleAddClick}
                        >
                            {props.item.in_stock
                                ? isAdded
                                    ? 'Remove from Cart'
                                    : 'Add to Cart'
                                : 'Out of Stock'}
                        </Button>
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
