import React, { useState, FunctionComponent } from 'react';
import FormInputField from './FormInputField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Grid, Button, MenuItem, SelectChangeEvent } from '@mui/material';
import { ItemCard } from '../ItemCard';
import dayjs, { Dayjs } from 'dayjs';
import { BHOItems } from '../../mocks/BHOItems.model';
import { UserClassification, UserCollege } from '@uark-acm/bho-data-models/lib';

type CheckoutFormScreenProps = {};
type CheckoutFormState = {
    firstName: string;
    lastName: string;
    email: string;
    classification: string;
    college: string;
    reason: string;
};

const CheckoutFormScreen: FunctionComponent<CheckoutFormScreenProps> = (
    props: CheckoutFormScreenProps
) => {
    const [formValues, setFormValues] = useState<CheckoutFormState>({
        firstName: '',
        lastName: '',
        email: '',
        classification: '',
        college: '',
        reason: '',
    });

    const [eventDate, setEventDate] = React.useState<Dayjs | null>(
        dayjs('0000-00-00')
    );
    const [pickupTime, setPickupDateTime] = React.useState<Dayjs | null>(
        dayjs('0000-00-00')
    );

    const changeHandler = (e: React.ChangeEvent<any>) => {
        setFormValues({ ...formValues, [e.target.id]: e.target.value });
    };

    const classificationChangeHandler = (e: SelectChangeEvent) => {
        setFormValues({ ...formValues, classification: e.target.value });
    };

    const collegeChangeHandler = (e: SelectChangeEvent) => {
        setFormValues({ ...formValues, college: e.target.value });
    };
    // do on submit
    const checkValidDate = () => {};

    const formValidation = (e: React.MouseEvent) => {};

    const checkValidTime = () => {};

    const createOrderRequestObject = () => {};

    const spacingBetweenFields = 'mt-5 inline-block';
    console.log('event date: ', eventDate);
    console.log('pickup time: ', pickupTime);

    return (
        <div>
            <div className="ml-10 mt-20">
                <label className="text-slate-500">Checkout</label>
            </div>
            <form id="checkoutForm" name="checkoutForm">
                <Grid container spacing={10}>
                    <Grid item className="w-1/3">
                        <div className="ml-10">
                            <label className={spacingBetweenFields}>
                                First Name
                            </label>
                            <br />
                            <FormInputField
                                className=""
                                name="firstName"
                                id="firstName"
                                onChange={changeHandler}
                                type="text"
                                required
                            ></FormInputField>
                            <br />
                            <label className={spacingBetweenFields}>
                                Last Name
                            </label>
                            <br />
                            <FormInputField
                                name="lastName"
                                id="lastName"
                                onChange={changeHandler}
                                type="text"
                                required
                            ></FormInputField>
                            <br />
                            <label className={spacingBetweenFields}>
                                Email
                            </label>
                            <br />
                            <FormInputField
                                name="email"
                                id="email"
                                onChange={changeHandler}
                                required
                            ></FormInputField>
                            <br />
                            <label className={spacingBetweenFields}>
                                Classification
                            </label>
                            <FormInputField
                                name="classification"
                                id="classification"
                                value={formValues.classification}
                                onChange={classificationChangeHandler}
                                required
                                select
                            >
                                {Object.values(UserClassification).map(
                                    (item, index) => (
                                        <MenuItem key={index} value={item}>
                                            {item}
                                        </MenuItem>
                                    )
                                )}
                            </FormInputField>
                            <label className={spacingBetweenFields}>
                                College
                            </label>
                            <br />
                            <FormInputField
                                name="college"
                                id="college"
                                onChange={collegeChangeHandler}
                                required
                                select
                            >
                                {Object.values(UserCollege).map(
                                    (item, index) => (
                                        <MenuItem key={index} value={item}>
                                            {item}
                                        </MenuItem>
                                    )
                                )}
                            </FormInputField>
                            <label className={spacingBetweenFields}>
                                Reason
                            </label>
                            <br />
                            <FormInputField
                                multiline
                                name="reason"
                                id="reason"
                                onChange={changeHandler}
                            ></FormInputField>
                        </div>
                    </Grid>
                    <Grid item className="w-1/3">
                        <div className="mt-5">
                            <label>
                                When's the event you are getting clothes for?
                            </label>
                            <br />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    sx={{ width: '100%' }}
                                    onChange={setEventDate}
                                />{' '}
                                <br />
                                <label className={spacingBetweenFields}>
                                    Pickup Date & Time
                                </label>
                                <br />
                                <DateTimePicker
                                    sx={{ width: '100%' }}
                                    onChange={setPickupDateTime}
                                />
                            </LocalizationProvider>
                            <br />
                        </div>
                        <div className="flex justify-center items-center mt-5">
                            <div>
                                <button className=" bg-red-700 text-white border-4 border-red-700 rounded-full py-2 px-5 m-5 outline-red-700 outline-2 !important">
                                    Submit Order
                                </button>
                                <button className="border-4 border-red-700 rounded-full py-2 px-5 m-5 outline-red-700 outline-2 !important">
                                    Cancel
                                </button>
                                {/* TODO: make it the actual red of uark*/}
                                <br />
                            </div>
                        </div>
                    </Grid>
                    <Grid item className="w-1/3">
                        <div>
                            {BHOItems.map((item, index) => (
                                <Grid item key={index} alignItems="center">
                                    <ItemCard item={item} added={true} />
                                </Grid>
                            ))}
                        </div>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default CheckoutFormScreen;
