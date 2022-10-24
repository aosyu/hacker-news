import {createSlice} from "@reduxjs/toolkit";
import {getStoryById, getTopStories} from "./thunkActions";
import {ItemView} from "../items/ItemView";

export const STORIES_ACTION_TYPE_PREFIX = "stories"

interface StoriesState {
    stories: ItemView[],
    currentStory: ItemView | undefined,
    storiesAreLoading: boolean
}

const init: StoriesState = {
    stories: [],
    currentStory: undefined,
    storiesAreLoading: false
}

const storiesSlice = createSlice({
    name: STORIES_ACTION_TYPE_PREFIX,
    initialState: init,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getTopStories.fulfilled, (state, action) => {
                state.stories = action.payload
                state.storiesAreLoading = false
                return state
            })
            .addCase(getTopStories.pending, (state, _) => {
                state.storiesAreLoading = true
                return state
            })
            .addCase(getTopStories.rejected, (state, _) => {
                state.storiesAreLoading = false
                return state
            })
            .addCase(getStoryById.fulfilled, (state, action) => {
                state.currentStory = action.payload
                return state
            })
    }
})

export default storiesSlice.reducer
