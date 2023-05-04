import { useEffect, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

type HomeScreenProps = {};

const HomeScreen: FunctionComponent<HomeScreenProps> = (
    props: HomeScreenProps
) => {
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                console.log(user.getIdToken());
            } else {
                console.log('user is logged out');
            }
        });
    }, []);
    return (
        <>
            <Link to="/newItem" className="underline text-blue-600">
                New Item
            </Link>
            <br></br>
            <Link to="/viewInventory" className="underline text-blue-600 ">
                View Items
            </Link>
            <br></br>
            <Link to="/checkInOut" className="underline text-blue-600 ">
                Check In Out
            </Link>
            <br></br>
            <Link to="/Login" className="underline text-blue-600 ">
                Login
            </Link>
        </>
    );
};

export default HomeScreen;
