import React, { useState, FunctionComponent } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { toast } from 'react-toastify';
import { Grid, MenuItem } from '@mui/material';
import { ItemCard } from '../components/ItemCard';
import dayjs, { Dayjs } from 'dayjs';
import { BHOItems } from '../mocks/BHOItems.model';
import {
    UserClassification,
    UserCollege,
    BHOCreateOrderRequest as CreateOrderRequest,
} from '@uark-acm/bho-data-models/lib';
import FormInputField from '../components/FormInputField';

type CheckoutFormScreenProps = {};

type CheckoutFormState = {
    firstName: string;
    lastName: string;
    email: string;
    classification: UserClassification;
    college: UserCollege;
    reason: string;
};

const CheckoutFormScreen: FunctionComponent<CheckoutFormScreenProps> = (
    props: CheckoutFormScreenProps
) => {
    const [formValues, setFormValues] = useState<CheckoutFormState>({
        firstName: '',
        lastName: '',
        email: '',
        classification: UserClassification.FRESHMAN,
        college: UserCollege.ENGINEERING,
        reason: '',
    });

    const [eventDate, setEventDate] = React.useState<Dayjs | null>(
        dayjs('0000-00-00')
    );
    const [pickupTime, setPickupDateTime] = React.useState<Dayjs | null>(
        dayjs('0000-00-00')
    );

    const changeHandler = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormValues({ ...formValues, [e.target.id]: e.target.value });
    };

    const classificationChangeHandler = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormValues({
            ...formValues,
            classification: e.target.value as UserClassification,
        });
    };

    const collegeChangeHandler = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormValues({
            ...formValues,
            college: e.target.value as UserCollege,
        });
    };
    // do on submit
    const checkValidDate = () => {};

    //This block right here handles checking to make sure that all the add item pieces have something in them
    const [validationErrors, setValidationErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        classification: false,
        college: false,
        reason: false,
    });

    //goes through and checks each of the inputs to make sure there is something in each part.
    const checkoutHandler = () => {
        if (!formValues.firstName) {
            setValidationErrors({ ...validationErrors, firstName: true });
        }
        if (!formValues.lastName) {
            setValidationErrors({ ...validationErrors, lastName: true });
        }
        if (!formValues.email) {
            setValidationErrors({ ...validationErrors, email: true });
        }
        if (!formValues.classification) {
            setValidationErrors({ ...validationErrors, classification: true });
        }
        if (!formValues.college) {
            setValidationErrors({ ...validationErrors, college: true });
        }
        if (!formValues.reason) {
            setValidationErrors({ ...validationErrors, reason: true });
        }

        // Check if there are validation errors
        if (
            validationErrors.firstName ||
            validationErrors.lastName ||
            validationErrors.email ||
            validationErrors.classification ||
            validationErrors.college ||
            validationErrors.reason
        ) {
            // Handle validation errors (e.g., display an error message)
            toast.error('Please fill in all required fields');
            setValidationErrors({
                ...validationErrors,
                firstName: false,
                lastName: false,
                email: false,
                classification: false,
                college: false,
                reason: false,
            });
        } else {
            // All fields are valid, you can proceed with adding the item
            console.log('Adding item:', formValues);
            createOrderRequestObject();
        }
    };

    const formValidation = (e: React.MouseEvent) => {
        e.preventDefault();
        createOrderRequestObject();
    };

    const checkValidTime = () => {};

    const createOrderRequestObject = () => {
        const order: CreateOrderRequest = {
            user_name: formValues.firstName + formValues.lastName,
            user_email: formValues.email,
            user_classification: formValues.classification,
            user_college: formValues.college,
            user_is_international: false,
            user_reason: formValues.reason,
            event_date: eventDate?.toDate(),
            requested_pickup: pickupTime!.toDate(),
            requested_items: [],
        };
    };
    const spacingBetweenFields = 'mt-5 inline-block';
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
                                />
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
                                <button
                                    onClick={checkoutHandler}
                                    className=" bg-red-700 text-white border-4 border-red-700 rounded-full py-2 px-5 m-5 outline-red-700 outline-2 !important"
                                >
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
