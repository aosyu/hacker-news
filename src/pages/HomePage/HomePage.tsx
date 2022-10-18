import {Stack} from "@mui/material";
import {Link} from "react-router-dom";
import appRoutesNames from "../../utils/constants/appRoutesNames";

const HomePage = () => {
    return <Stack>
        <Link to={appRoutesNames.HOME}>Home</Link>
        <Link to={`${appRoutesNames.NEWS}/${0}`}>News 0</Link>
        <Link to={`${appRoutesNames.NEWS}/${1}`}>News 1</Link>
        <Link to={`${appRoutesNames.NEWS}/${2}`}>News 2</Link>
    </Stack>
}

export default HomePage
