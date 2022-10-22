import {Box, Typography, useTheme} from "@mui/material";
import React from "react";
import {appRoutesNames} from "../utils/constants/constants";
import {StyledLink} from "./styled/StyledLink";
// import ReplayIcon from '@mui/icons-material/Replay';

const MainHeader = () => {
    const theme = useTheme()

    return <Box sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        borderTop: `3px solid ${theme.palette.divider}`,
        borderBottom: `3px solid ${theme.palette.divider}`,
        alignItems: "center"
    }}>
        <StyledLink to={appRoutesNames.HOME}>
            <Typography variant={"h1"} m={1}>Hacker news</Typography>
        </StyledLink>
        {/*<ReplayIcon fontSize={"large"}/>*/}
    </Box>
}

export default MainHeader
