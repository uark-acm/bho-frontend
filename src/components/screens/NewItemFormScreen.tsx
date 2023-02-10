import React, { useState, FunctionComponent } from "react";

type NewItemFormScreenProps = {}

const NewItemFormScreen: FunctionComponent<NewItemFormScreenProps> = (props: NewItemFormScreenProps) => {
    const [itemValues, setItemValues] = useState({
        itemName: "",
        itemCategory: "",
        itemSize: "",
        itemDescription: "",
        itemPhoto: -1,
    })

    const changeHandler = e => {
        setItemValues({...itemValues, [e.target.name]: e.target.value})
    }

    return(
        <form name="createClothingItemForm">
            <label>Item Name</label>
            <input type="text" id="itemName" name="itemName" onChange={changeHandler} required></input>
            <label>Item Category</label>
            <datalist id="itemCategory" name="itemCategory" onChange={changeHandler}></datalist>
            <label>Item Size</label>
            <datalist id="itemSize" name="itemSize" onChange={changeHandler}></datalist>
            <label>Item Description</label>
            <input id="itemDescription" name="itemDescription" onChange={changeHandler} required></input>
        </form>
    )
}

export default NewItemFormScreen;