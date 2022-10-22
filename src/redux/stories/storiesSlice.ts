import {createSlice} from "@reduxjs/toolkit";
import {getStoryById, getTopStories} from "./thunkActions";

export const STORIES_ACTION_TYPE_PREFIX = 'stories'

export interface StoryView {
    id: number,
    title: string,
    score: number,
    by: string,
    time: number,

    url: string,
    descendants: number,
    kids: string[]
}

interface StoriesState {
    stories: StoryView[],
    currentStory: StoryView | undefined,
}

const init: StoriesState = {
    stories: [],
    currentStory: undefined
}

const storiesSlice = createSlice({
    name: STORIES_ACTION_TYPE_PREFIX,
    initialState: init,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getTopStories.fulfilled, (state, action) => {
            state.stories = action.payload
            return state
        })
            .addCase(getStoryById.fulfilled, (state, action) => {
                state.currentStory = action.payload
                return state
            })
    }
})

export default storiesSlice.reducer
