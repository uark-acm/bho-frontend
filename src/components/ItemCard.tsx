import { BHOItem } from '@uark-acm/bho-data-models/lib';
import { FunctionComponent, useState } from 'react';
import { Container, IconButton, Card, CardMedia } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import './ItemCard.css';
import { ViewItemModal } from './ViewItemModal';
import { useAppDispatch } from '../redux/redux-config/hooks';
import { addToCart, removeFromCart } from '../redux/actions/Cart.actions';

type ItemCardProps = { item: BHOItem; added: boolean };

export const ItemCard: FunctionComponent<ItemCardProps> = (
    props: ItemCardProps
) => {
    const [openModal, setOpenModal] = useState(false);
    const [isAdded, setIsAdded] = useState(props.added);

    const dispatch = useAppDispatch();

    const handleCardClick = () => {
        setOpenModal(true);
    };

    const handleCornerButtonClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        dispatch(isAdded ? removeFromCart(props.item) : addToCart(props.item));
        setIsAdded(!isAdded);
    };

    return (
        <Container className="container">
            <Card
                className="card"
                style={{
                    backgroundColor: props.item.in_stock
                        ? '#FFFFFF'
                        : '#B3B3B3',
                }}
                onClick={handleCardClick}
            >
                <CardMedia
                    className="image"
                    image={props.item.image}
                    title="Image"
                >
                    {props.item.in_stock && (
                        <IconButton
                            className="addButton"
                            onClick={handleCornerButtonClick}
                        >
                            {isAdded ? (
                                <ClearIcon
                                    style={{
                                        stroke: 'white',
                                        scale: '75%',
                                        strokeWidth: '1px',
                                        color: 'white',
                                    }}
                                />
                            ) : (
                                <AddIcon
                                    style={{
                                        stroke: 'white',
                                        scale: '75%',
                                        strokeWidth: '1px',
                                        color: 'white',
                                    }}
                                />
                            )}
                        </IconButton>
                    )}
                </CardMedia>
                <div className="textDiv">
                    <div className="nameText">{props.item.name}</div>
                    <div className="sizeText">{props.item.size}</div>
                </div>
            </Card>
            <ViewItemModal
                item={props.item}
                added={props.added}
                open={openModal}
                setOpen={setOpenModal}
            />
        </Container>
    );
};
