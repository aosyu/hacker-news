import {Box, Button, Typography} from "@mui/material";
import React, {useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {commentsAdapter} from "../redux/comments/commentsSlice";
import {RootState} from "../redux/store";
import {getComments} from "../redux/items/thunkActions";
import parse from "html-react-parser";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Comment: React.FC<{ id: string }> = ({id}) => {
    const dispatch = useAppDispatch()

    const commentsSelectors = commentsAdapter.getSelectors((state: RootState) => state.comments)

    const comment = useAppSelector(state => commentsSelectors.selectById(state, id))

    const subComments = useCallback(() => {
            if (!comment) return <></>
            return comment.kids.map((childId, key) => <Comment key={key} id={childId}/>)
        }, [comment]
    )

    if (!comment) {
        return <></>
    }

    return <Box>
        <Typography variant={"subtitle1"}>{comment.by}</Typography>

        {/* TODO :: handle undefined values*/}
        {comment.text && <Typography variant={"subtitle2"}>{parse(comment.text)}</Typography>}

        {/* TODO :: handle undefined values*/}
        {comment.kids && <>
            <Button startIcon={<ArrowDropUpIcon/>}
                    onClick={() => dispatch(getComments({parentId: comment.id, ids: comment.kids}))}>
                show more
            </Button>

            <Box marginLeft={"3rem"}>{subComments()} </Box>
        </>}
    </Box>
}

export default Comment
