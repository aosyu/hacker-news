import {createAsyncThunk} from "@reduxjs/toolkit";
import {STORIES_ACTION_TYPE_PREFIX} from "./storiesSlice";
import {storiesApi} from "../../utils/api/storiesApi";
import {STORIES_COUNT} from "../../utils/constants/constants";
import {getItemById} from "../items/thunkActions";
import {ItemView} from "../items/ItemView";
import {itemApi} from "../../utils/api/itemApi";

export const getStoryById = getItemById(`${STORIES_ACTION_TYPE_PREFIX}/getStory`)

export const getTopStories = createAsyncThunk<ItemView[], void>(
    `${STORIES_ACTION_TYPE_PREFIX}/getTopStories`,
    async () => {
        const {data: storyIds} = await storiesApi.getTopStoriesIds()
        const res = await Promise.all(storyIds.slice(0, STORIES_COUNT).map(itemApi.getItemById))
        return res.map(a => a.data)
    }
)
