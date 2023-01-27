import { FunctionComponent } from "react"
import { Link } from "react-router-dom";

type HomeScreenProps = {}

const HomeScreen: FunctionComponent<HomeScreenProps> = (props: HomeScreenProps) => {
    return <>
        <Link to="/newItem">New Item</Link><br></br>
        <Link to="/viewInventory">View Items</Link>
    </>;
}

export default HomeScreen;