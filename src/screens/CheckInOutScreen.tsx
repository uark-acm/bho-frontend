import { FunctionComponent } from 'react';
import { useState, useRef } from 'react';
import { QrReader } from 'react-qr-reader';
import styled from 'styled-components';
import React from 'react';

const Custom = styled.button`
    font-size: 20px;
    border: none;
    color: white;
    padding: 5px 50px;
    text-align: center;
    text-decoration: none;
    display: block;
    margin: 0px 2px;
    cursor: pointer;
    border-radius: 40px;
    font-family: monospace;
    font-weight: 700;
    margin: auto;
`;

const camStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-20px',
    marginBottom: '-25px',
};

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
            <div style={camStyle}>
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
                    }}
                />
            </div>

            <Custom
                onClick={handleScanItem}
                style={{ backgroundColor: buttonColor }}
            >
                Scan Item
            </Custom>
        </React.Fragment>
    );
};

export default CheckInOutScreen;
