import {Box, Typography, useTheme} from "@mui/material";
import React from "react";
import {appRoutesNames} from "../utils/constants/constants";
import {StyledLink} from "./styled/StyledLink";

const MainHeader = () => {
    const theme = useTheme()

    return <Box sx={{
        borderTop: `3px solid ${theme.palette.divider}`,
        borderBottom: `3px solid ${theme.palette.divider}`
    }}>
        <StyledLink to={appRoutesNames.HOME}>
            <Typography variant={"h1"} m={1}>Hacker news</Typography>
        </StyledLink>
    </Box>
}

export default MainHeader
