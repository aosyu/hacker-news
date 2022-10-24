import {Box, Typography} from "@mui/material";
import React from "react";
import {appRoutesNames} from "../utils/constants/constants";
import {StyledLink} from "./styled/StyledLink";
// import ReplayIcon from '@mui/icons-material/Replay';

const MainHeader = () => {
    return <Box sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "secondary.light",
        color: "white",
        width: "100%",
        padding: "0.8rem 0 0.8rem 0",
        alignItems: "center"
    }}>
        <StyledLink to={appRoutesNames.HOME}>
            <Typography variant={"h1"} m={1} color={"white"}>Hacker news</Typography>
        </StyledLink>
        {/*<ReplayIcon fontSize={"large"}/>*/}
    </Box>
}

export default MainHeader
