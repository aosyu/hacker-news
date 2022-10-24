import {configureStore} from "@reduxjs/toolkit";
import storiesReducer from "./stories/storiesSlice";
import commentsReducer from "./comments/commentsSlice";

export const store = configureStore({
    reducer: {
        storiesReducer,
        comments: commentsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
