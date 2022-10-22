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
        divider: "gainsboro",
        secondary: {
            main: "#C58F76"
        }
    },
})

theme = responsiveFontSizes(theme)

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Box sx={{background: {md: "black"}}} display={"flex"} justifyContent={"center"} minHeight={"105vh"}>
                    <Stack p={{xs: "1rem", md: "3rem"}}
                           sx={{
                               background: "white",
                               width: {xs: "100%", md: "1000px"},
                           }}
                           gap={2}
                           width={"1000px"}
                           minWidth={"300px"}>
                        <MainHeader/>
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
