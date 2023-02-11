import { BHOItem } from "@uark-acm/bho-data-models/lib";
import { FunctionComponent } from "react"
import { Container, IconButton, Card, CardMedia } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import './ItemCard.css'

type ItemCardProps = {item: BHOItem}

const ItemCard: FunctionComponent<ItemCardProps> = (props: ItemCardProps) => {
    return (
    <Container className="container">
        <Card className="card" style={{backgroundColor: props.item.in_stock ? '#FFFFFF' : '#B3B3B3'}}>
            <CardMedia
                className="image"
                image={props.item.image}
                title="Image"
            >
                <IconButton color="error" className="addButton" onClick={() => alert('pls add prettier jack')}>
                    <AddIcon style={{ stroke: "white", scale: "75%", strokeWidth: "1px", color:"white" }}/>
                </IconButton>
            </CardMedia>
            <div className="textDiv">
                <div className="nameText">
                    {props.item.name}
                </div>
                <div className="sizeText">
                    {props.item.size}
                </div>
            </div>
        </Card>
    </Container>
    );
}

export default ItemCard;