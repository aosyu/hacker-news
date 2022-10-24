import {createAsyncThunk} from "@reduxjs/toolkit";
import {ItemView} from "./ItemView";
import {itemApi} from "../../utils/api/itemApi";

const ITEM_ACTION_TYPE_PREFIX = "item"

export const getItemById = (typePrefix: string) => createAsyncThunk<ItemView, number>(
    typePrefix,
    async (id) => {
        const {data} = await itemApi.getItemById(id)
        return data
    }
)

export const getComments = createAsyncThunk<{ parentId: number, comments: ItemView[] },
    { parentId: number, ids: string[] }>(
    `${ITEM_ACTION_TYPE_PREFIX}/getComments`,
    async ({parentId, ids}) => {
        const res = await Promise.all(ids.map(id => itemApi.getItemById(Number(id))))
        return {parentId, comments: res.map(a => a.data)}
    }
)
