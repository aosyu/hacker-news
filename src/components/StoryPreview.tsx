import {StoryView} from "../redux/stories/storiesSlice";
import React from "react";
import {Box, Typography, useTheme} from "@mui/material";
import {appRoutesNames} from "../utils/constants/constants";
import {StyledLink} from "./styled/StyledLink";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const StoryPreview: React.FC<{ story: StoryView }> = ({story}) => {
    const theme = useTheme()

    return <Box>
        <Box flexDirection={"row"} display={"flex"} alignItems={"baseline"}>
            <ArrowDropUpIcon fontSize={"large"} viewBox="0 0 20 9" htmlColor={theme.palette.divider}/>

            <Typography variant={"caption"} marginRight={"1rem"}>
                {story.score}
            </Typography>

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
        </Box>

        <Typography variant={"caption"} color={theme.palette.secondary.main}>
            By: <span style={{cursor: "pointer", textDecoration: "underline"}}>{story.by}</span>
            <span style={{margin: "0 5px 0 5px"}}>|</span>
            {new Date(story.time * 1000).toLocaleString('en', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })}
        </Typography>
    </Box>
}

export default StoryPreview
