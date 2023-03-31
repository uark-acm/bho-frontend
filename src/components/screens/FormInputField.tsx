import { FunctionComponent } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

const FormInputField: FunctionComponent<TextFieldProps> = (
    props: TextFieldProps
) => {
    const { select, children, multiline, ...rest } = props;

    return (
        <TextField
            size="small"
            variant="filled"
            hiddenLabel
            fullWidth
            select={select}
            multiline={multiline}
            minRows={3}
            required={props.required}
            onChange={props.onChange}
            name={props.name}
            id={props.id}
            className={props.className}
        >
            {props.children}
        </TextField>
    );
};

export default FormInputField;
