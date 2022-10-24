import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ItemView} from "../items/ItemView";
import {getComments} from "../items/thunkActions";

export const commentsAdapter = createEntityAdapter<ItemView>({
    selectId: (comment) => comment.id,
    sortComparer: (a, b) => a.time < b.time ? 1 : a.time > b.time ? -1 : 0
})

const commentsSlice = createSlice({
    name: "comments",
    initialState: commentsAdapter.getInitialState({
        // TODO
        isLoading: false
    }),
    reducers: {
        updateComments(state, action: PayloadAction<{ comments: ItemView[] }>) {
            state.isLoading = false
            commentsAdapter.setAll(state, action.payload.comments)
        },
        updateCommentTest: commentsAdapter.updateOne,
        clearAll: commentsAdapter.removeAll
    },
    extraReducers: builder => {
        builder.addCase(getComments.fulfilled, (state, action) => {
            commentsAdapter.setMany(state, action.payload.comments)
        })
    }
})

export const {updateComments, updateCommentTest, clearAll} = commentsSlice.actions

export default commentsSlice.reducer
