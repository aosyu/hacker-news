import {StoryView} from "../redux/stories/storiesSlice";
import React from "react";
import {Box, Typography, useTheme} from "@mui/material";
import {appRoutesNames} from "../utils/constants/constants";
import {StyledLink} from "./styled/StyledLink";

const StoryPreview: React.FC<{ story: StoryView }> = ({story}) => {
    const theme = useTheme()

    return <Box sx={{display: "flex"}} justifyContent={"space-between"}>
        <Box>
            <StyledLink to={`${appRoutesNames.STORIES}/${story.id}`}
                        sx={{
                            "&:after": {
                                marginTop: "5px",
                                display: "block",
                                content: '""',
                                borderBottom: `solid 3px ${theme.palette.divider}`,
                                transform: "scaleX(0)",
                                transition: "transform 250ms ease-in-out",
                            },
                            "&:hover:after": {transform: "scaleX(1)"},
                        }}>
                <Typography variant={"h3"} sx={{cursor: "pointer"}}>
                    {story.title}
                </Typography>
            </StyledLink>
            <Typography variant={"caption"}>By: {story.by}</Typography>
        </Box>

        <Box>
            <Typography variant={"caption"}>{story.score}</Typography>
            <Typography variant={"caption"}>{story.time}</Typography>
        </Box>
    </Box>
}

export default StoryPreview
