import {Box, Button, LinearProgress, Typography} from "@mui/material";
import React, {useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {commentsAdapter, setChildrenHidden} from "../redux/comments/commentsSlice";
import {RootState} from "../redux/store";
import {getComments} from "../redux/items/thunkActions";
import parse from "html-react-parser";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Comment: React.FC<{ id: string }> = ({id}) => {
    const dispatch = useAppDispatch()

    const commentsSelectors = commentsAdapter.getSelectors((state: RootState) => state.comments)

    const comment = useAppSelector(state => commentsSelectors.selectById(state, id))

    const subComments = useCallback(() => {
            if (!comment || !comment.kids) return <></>
            return comment.kids.map((childId, key) => <Comment key={key} id={childId}/>)
        }, [comment]
    )

    const onShowMoreClick = () => {
        if (!comment) return
        dispatch(setChildrenHidden({commentId: Number(id), value: false}))
        dispatch(getComments({parentId: comment.id, ids: comment.kids}))
    }

    const onHideClick = () => {
        dispatch(setChildrenHidden({commentId: Number(id), value: true}))
    }

    if (!comment) {
        return <></>
    }

    return <Box>
        <Typography variant={"subtitle1"}>{comment.by}</Typography>

        {/* TODO :: handle undefined values*/}
        {comment.text && <Typography
            sx={{
                "& *": {
                    overflow: "auto",
                    display: "block"
                }
            }}
            variant={"subtitle2"}>
            {parse(comment.text)}
        </Typography>}

        {comment.kids &&
            (comment.childrenHidden
                ?
                <Button startIcon={<ArrowDropDownIcon/>}
                        onClick={comment.childrenHidden ? onShowMoreClick : onHideClick}>
                    {comment.childrenHidden ? "more" : "hide"}
                </Button>
                :
                <Button startIcon={<ArrowDropUpIcon/>}
                        onClick={comment.childrenHidden ? onShowMoreClick : onHideClick}>
                    {comment.childrenHidden ? "show more" : "hide"}
                </Button>)
        }

        {comment.isLoading
            ?
            <LinearProgress color={"secondary"} sx={{m: "0.5rem"}}/>
            :
            // TODO :: handle undefined values
            <>{!comment.childrenHidden && <Box marginLeft={"3rem"}>{subComments()} </Box>}</>
        }
    </Box>
}

export default Comment
