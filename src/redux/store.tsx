import {configureStore} from "@reduxjs/toolkit";
import storiesReducer from "./stories/storiesSlice";

export const store = configureStore({
    reducer: {
        storiesReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
