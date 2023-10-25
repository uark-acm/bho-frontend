import { useState } from 'react';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

//added by Joe
import './login.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e: any) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const userJWT = userCredential.user.getIdToken();
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    const onRegister = (e: any) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const userJWT = userCredential.user.getIdToken();
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <>
            <main>
                <section>
                    <div id="all">
                        <form>
                            <div id="forms">
                                <div id="email">
                                    <label htmlFor="email-address">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="Email address"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>

                                <div id="password">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        placeholder="Password"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div id="buttons">
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={onLogin}
                                        style={{
                                            backgroundColor: 'red',
                                        }}
                                    >
                                        Login
                                    </Button>
                                </div>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={onRegister}
                                        style={{
                                            backgroundColor: 'red',
                                        }}
                                    >
                                        Register
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Login;
