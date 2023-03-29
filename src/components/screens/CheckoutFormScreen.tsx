import React, { useState, FunctionComponent } from 'react';
import FormInputField from './FormInputField';
import { DateTime } from 'luxon';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { Grid, Button, MenuItem } from '@mui/material';
import {ItemCard} from '../ItemCard';
import { BHOItems } from '../../mocks/BHOItems.model';
import {ClientClassification, ClientCollege} from '@uark-acm/bho-data-models/lib';;


type CheckoutFormScreenProps  = {};
type CheckoutFormState = {
    firstName: String,
    lastName: String,
    email: String,
    classification: ClientClassification,
    college: ClientCollege,
    reason: String,
    eventDate: DateTime,
    pickupDate: DateTime,
    pickupTime: DateTime,
};

const CheckoutFormScreen: FunctionComponent<CheckoutFormScreenProps> = (
    props: CheckoutFormScreenProps
) => {
    const [itemValues, setItemValues] = useState<CheckoutFormState>({
        firstName: '',
        lastName: '',
        email: '',
        classification: null,
        college: null,
        reason: '',
        eventDate:'',
        pickupDate: '',
        pickupTime: '',
    });

    const changeHandler = (e: React.ChangeEvent<any>) => {
        console.log(e.target.id, e.target.value);
        setItemValues({ ...itemValues, [e.target.id]: e.target.value });
    };

    return (
        <div> 
            <div className="ml-0.5 my-5">
                <label className="text-slate-500 pt-10 pl-10">Checkout</label>
            </div>
            <form id="checkoutForm" name="checkoutForm">
                <Grid container spacing={10} >
                    <Grid item className="w-1/3">
                        <div className="ml-10">
                            <label>First Name</label> <br />
                            <FormInputField name="firstName" id="firstName" onChange={changeHandler} type="text"></FormInputField> <br />
                            <label>Last Name</label> <br />
                            <FormInputField name="lastName" id="lastName" onChange={changeHandler} type="text"></FormInputField> <br />
                            <label>Email</label> <br />
                            <FormInputField name="email" id="email" onChange={changeHandler}></FormInputField> <br/>
                            <label>Classification</label>
                            <FormInputField name="classification" id="classification" value={itemValues.classification} select>
                                {Object.values(ClientClassification).map((item, index) => (
                                    <MenuItem key={item} value={item} onClick={changeHandler}>{item}</MenuItem>
                                    ))
                                }
                            </FormInputField>
                            <label>College</label> <br />
                            <FormInputField name="college" id="college" onChange={changeHandler} select>
                                {Object.values(ClientCollege).map((item, index) => (
                                    <MenuItem>{item}</MenuItem>
                                    ))
                                }
                            </FormInputField>
                            <label>Reason</label> <br />
                            <FormInputField multiline name="reason" id="reason" onChange={changeHandler}></FormInputField>
                        </div>
                    </Grid>
                    <Grid item className="w-1/3">
                        <div>
                            <label>When's the event you are getting clothes for? </label> <br />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateField name="eventDate" id="eventDate" onChange={changeHandler} variant = "filled" size="small" hiddenLabel/>
                            </LocalizationProvider><br />
                            <label>Pickup Date</label> <br />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateField hiddenLabel name="pickupDate" id="pickupDate" onChange={changeHandler}  variant = "filled" size="small"/> 
                                <br />
                                <label>Pickup Time</label> <br />
                                <TimeField
                                    name="pickupTime" id="pickupTime" onChange={changeHandler}
                                    hiddenLabel
                                    variant = "filled" size="small"
                                />
                            </LocalizationProvider> <br />
                        </div>
                        <div>
                            <Button>Cancel</Button>
                            <Button>Submit Order</Button>
                        </div>
                    </Grid>
                    <Grid item className="w-1/3">  
                        {BHOItems.map((item, index) => (
                        <Grid item key={index} alignItems="center">
                            <ItemCard item={item} added={true} />
                        </Grid>
                        ))}
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default CheckoutFormScreen;
