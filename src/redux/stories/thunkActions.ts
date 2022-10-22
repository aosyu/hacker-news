import {createAsyncThunk} from "@reduxjs/toolkit";
import {STORIES_ACTION_TYPE_PREFIX, StoryView} from "./storiesSlice";
import {storiesApi} from "../../utils/api/storiesApi";
import {STORIES_COUNT} from "../../utils/constants/constants";
import {getItemById} from "../items/thunkActions";

export const getStoryById = getItemById(`${STORIES_ACTION_TYPE_PREFIX}/getStory`)

export const getTopStories = createAsyncThunk<StoryView[], void>(
    `${STORIES_ACTION_TYPE_PREFIX}/getTopStories`,
    async () => {
        const {data: storyIds} = await storiesApi.getTopStories()
        const res = await Promise.all(storyIds.slice(0, STORIES_COUNT).map(storiesApi.getStoryById))
        return res.map(a => a.data)
    }
)
