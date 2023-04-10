import { BHOItem } from '@uark-acm/bho-data-models/lib';
import { FunctionComponent, useState } from 'react';
import { Container, IconButton, Card, CardMedia } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './ItemCard.css';
import { ViewItemModal } from './ViewItemModal';
import { useAppDispatch } from '../redux/redux-config/hooks';
import { addToCart, removeFromCart } from '../redux/actions/Cart.actions';

type ItemCardProps = { item: BHOItem; added?: boolean; admin?: boolean };

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
                    {(props.admin || props.item.in_stock) && (
                        <IconButton
                            className="addButton"
                            onClick={handleCornerButtonClick}
                        >
                            {props.admin ? (
                                <InfoOutlinedIcon
                                    style={{
                                        stroke: 'white',
                                        scale: '130%',
                                        strokeWidth: 0.25,
                                        color: 'white',
                                    }}
                                />
                            ) : isAdded ? (
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
                <div className={`textDiv ${props.admin ? 'mb-3' : 'mb-6'}`}>
                    <div className={`nameText ${props.admin ? '' : 'mb-2'}`}>
                        {props.item.name}
                    </div>
                    <div className="sizeText">{props.item.size}</div>
                    {props.admin && (
                        <div className="text-center text-sm font-semibold text-slate-600">
                            ID: {props.item.id}
                        </div>
                    )}
                </div>
            </Card>
            <ViewItemModal
                item={props.item}
                admin={props.admin}
                added={props.added}
                open={openModal}
                setOpen={setOpenModal}
            />
        </Container>
    );
};
