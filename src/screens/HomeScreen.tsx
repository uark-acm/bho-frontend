import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

type HomeScreenProps = {};

const HomeScreen: FunctionComponent<HomeScreenProps> = (
    props: HomeScreenProps
) => {
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
        </>
    );
};

export default HomeScreen;
