import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NewsPage from "../pages/NewsPage/NewsPage";
import appRoutesNames from "../utils/constants/appRoutesNames";
import {Box} from "@mui/material";

function App() {
    return (
        <BrowserRouter>
            <Box display={'flex'} m={'1rem'}>
                <Switch>
                    <Redirect from='/' to={appRoutesNames.HOME} exact/>
                    <Route path={appRoutesNames.HOME} component={HomePage}/>
                    <Route path={`${appRoutesNames.NEWS}/:newsId`} component={NewsPage}/>
                </Switch>
            </Box>
        </BrowserRouter>
    )
}

export default App
