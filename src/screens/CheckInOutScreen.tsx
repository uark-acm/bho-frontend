import { FunctionComponent } from 'react';
import { useState, useRef } from 'react';
import { QrReader } from 'react-qr-reader';
import React from 'react';
import { Button, Typography } from '@mui/material';

type CheckInOutScreenProps = {};

const CheckInOutScreen: FunctionComponent<CheckInOutScreenProps> = () => {
    const scanItemRef = useRef<boolean>(true);
    const [buttonColor, setButtonColor] = useState('#DFDFDF');

    const handleScanItem = () => {
        setButtonColor('#DFDFDF');
        scanItemRef.current = true;
    };

    return (
        <React.Fragment>
            <QrReader
                onResult={(result, error) => {
                    if (result && scanItemRef.current) {
                        console.log(result.getText());
                        setButtonColor('#A51E36');
                        scanItemRef.current = false;
                    }

                    if (error) {
                        // console.log(error);
                    }
                }}
                constraints={{ facingMode: 'user' }}
                containerStyle={{
                    width: '45%',
                    margin: 'auto',
                    marginTop: '-20px',
                    marginBottom: '-25px',
                }}
            />
            <Typography align="center">
                <Button
                    variant="contained"
                    style={{
                        borderRadius: '40px',
                        backgroundColor: buttonColor,
                        padding: '0.5% 10%',
                    }}
                    disabled={scanItemRef.current}
                    onClick={handleScanItem}
                >
                    Scan Item
                </Button>
            </Typography>
        </React.Fragment>
    );
};

export default CheckInOutScreen;
