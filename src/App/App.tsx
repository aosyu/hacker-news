import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import StoryPage from "../pages/StoryPage/StoryPage";
import {Box, createTheme, responsiveFontSizes, Stack, ThemeProvider} from "@mui/material";
import {appRoutesNames} from "../utils/constants/constants";
import MainHeader from "../components/MainHeader";

let theme = createTheme({
    spacing: (factor: number) => `${0.5 * factor}rem`,
    typography: {
        fontFamily: "georgia, times new roman, times, serif",
        h1: {
            fontFamily: "georgia, times new roman, times, serif",
            fontSize: "3rem",
            fontWeight: "bold"
        },
        h3: {
            fontFamily: "georgia, times new roman, times, serif",
            fontWeight: "bold",
            fontSize: "medium",
            color: "#2B2B2B"
        },
        caption: {
            textTransform: "uppercase",
            fontFamily: "nyt-franklin,helvetica,arial,sans-serif",
            color: "#727272"
        },
        subtitle2: {
            color: "#727272",
            fontFamily: "nyt-franklin,helvetica,arial,sans-serif"
        },
        subtitle1: {
            fontWeight: "bold",
            color: "#2B2B2B"
        },
        button: {
            fontSize: "medium",
            fontFamily: "nyt-franklin,helvetica,arial,sans-serif",
        }
    },
    shape: {
        borderRadius: 10
    },
    palette: {
        divider: "gainsboro",
        primary: {
            dark: "#2B2D42",
            main: "#AA1155",
            light: "#EDF2F4"
        },
        secondary: {
            main: "#AA1155",
        },
    },
})

theme = responsiveFontSizes(theme)

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Box display={"flex"} justifyContent={"flex-start"} minHeight={"105vh"} flexDirection={"column"}>
                    <MainHeader/>
                    <Stack m={"1.5rem"}
                           sx={{
                               background: "white",
                               width: {xs: `calc(100% - 3rem)`, md: "1000px"},
                           }}
                           alignSelf={"center"}
                           gap={2}
                           width={"1000px"}
                           minWidth={"300px"}>
                        <Switch>
                            <Redirect from="/" to={appRoutesNames.HOME} exact/>
                            <Route path={appRoutesNames.HOME} component={HomePage}/>
                            <Route path={`${appRoutesNames.STORIES}/:storyId`} component={StoryPage}/>
                        </Switch>
                    </Stack>
                </Box>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
