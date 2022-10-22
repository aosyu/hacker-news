import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import StoryPage from "../pages/StoryPage/StoryPage";
import {createTheme, responsiveFontSizes, Stack, ThemeProvider} from "@mui/material";
import {appRoutesNames} from "../utils/constants/constants";
import MainHeader from "../components/MainHeader";

let theme = createTheme({
    spacing: (factor: number) => `${0.5 * factor}rem`,
    typography: {
        fontFamily: "Montserrat, sans-serif",
        h1: {
            fontFamily: "georgia, times new roman, times, serif",
            fontSize: "3rem",
            fontWeight: "bold"
        },
        h3: {
            fontFamily: "georgia, times new roman, times, serif",
            fontWeight: "bold",
            fontSize: "medium",
        },
        caption: {
            textTransform: "uppercase",
            fontFamily: "nyt-franklin,helvetica,arial,sans-serif",
            color: "#727272"
        }
    },
    shape: {
        borderRadius: 10
    },
    palette: {
        divider: "gainsboro"
    },
})

theme = responsiveFontSizes(theme)

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Stack m={"1rem"} alignItems={"center"} gap={2}>
                    <MainHeader/>
                    <Switch>
                        <Redirect from="/" to={appRoutesNames.HOME} exact/>
                        <Route path={appRoutesNames.HOME} component={HomePage}/>
                        <Route path={`${appRoutesNames.STORIES}/:storyId`} component={StoryPage}/>
                    </Switch>
                </Stack>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
