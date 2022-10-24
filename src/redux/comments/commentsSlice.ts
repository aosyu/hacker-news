import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ItemView} from "../items/ItemView";
import {getComments} from "../items/thunkActions";
import {RootState} from "../store";

type CommentView = ItemView & { isLoading: boolean, childrenHidden: boolean }

export const commentsAdapter = createEntityAdapter<CommentView>({
    selectId: (comment) => comment.id,
    sortComparer: (a, b) => a.time < b.time ? 1 : a.time > b.time ? -1 : 0
})

const constructCommentList = (comments: ItemView[]) => {
    return comments.map(comment => {
        return {
            isLoading: false,
            childrenHidden: true,
            ...comment
        } as CommentView
    })
}

// const changeOneField () => {
//     TODO
// }

const commentsSlice = createSlice({
    name: "comments",
    initialState: commentsAdapter.getInitialState,
    reducers: {
        updateComments(state, action: PayloadAction<{ comments: ItemView[] }>) {
            commentsAdapter.setAll(state, constructCommentList(action.payload.comments))
        },
        clearAll: commentsAdapter.removeAll,
        setIsLoading(state, action: PayloadAction<{ commentId: number, value: boolean }>) {
            commentsAdapter.updateOne(state, {id: action.payload.commentId, changes: {isLoading: action.payload.value}})
        },
        setChildrenHidden(state, action: PayloadAction<{ commentId: number, value: boolean }>) {
            commentsAdapter.updateOne(state, {
                id: action.payload.commentId,
                changes: {childrenHidden: action.payload.value}
            })
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getComments.fulfilled, (state, action) => {
                const id = action.meta.arg.parentId
                commentsAdapter.updateOne(state, {id, changes: {isLoading: false}})
                commentsAdapter.setMany(state, constructCommentList(action.payload.comments))
            })
            .addCase(getComments.pending, (state, action) => {
                const id = action.meta.arg.parentId
                commentsAdapter.updateOne(state, {id, changes: {isLoading: true}})
            })
            .addCase(getComments.rejected, (state, action) => {
                const id = action.meta.arg.parentId
                commentsAdapter.updateOne(state, {id, changes: {isLoading: false}})
            })
    }
})

export const commentsSelectors = commentsAdapter.getSelectors((state: RootState) => state.comments)

export const {updateComments, clearAll, setIsLoading, setChildrenHidden} = commentsSlice.actions

export default commentsSlice.reducer
