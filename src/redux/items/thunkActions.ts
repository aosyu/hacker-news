import {createAsyncThunk} from "@reduxjs/toolkit";
import {StoryView} from "../stories/storiesSlice";
import {storiesApi} from "../../utils/api/storiesApi";

export const getItemById = (typePrefix: string) => createAsyncThunk<StoryView, number>(
    typePrefix,
    async (id) => {
        const {data} = await storiesApi.getStoryById(id)
        return data
    }
)
