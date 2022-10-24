import {Box, Link, Stack, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getStoryById} from "../../redux/stories/thunkActions";
import {CenteredLoader} from "../../components/styled/CenteredLoader";
import StoryPreview from "../../components/StoryPreview";
import {getComments} from "../../redux/items/thunkActions";
import Comment from "../../components/Comment";
import {clearAll} from "../../redux/comments/commentsSlice";

const StoryPage = () => {
    const {storyId} = useParams<{ storyId: string }>()

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(clearAll())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const story = useAppSelector(state => state.storiesReducer.currentStory)

    const [isLoading, setIsLoading] = useState<boolean>(true)

    // TODO :: isLoading from state
    useEffect(() => {
        if (!storyId) return

        setIsLoading(true)
        dispatch(getStoryById(Number(storyId)))
            .unwrap()
            .then(story => dispatch(getComments({parentId: Number(storyId), ids: story.kids})))
            .then(() => setIsLoading(false))
        // TODO :: error handling
    }, [dispatch, storyId])

    if (isLoading || !storyId || !story) {
        return <CenteredLoader/>
    }

    return <Stack gap={1}>
        <Box sx={{
            borderBottom: "3px solid gainsboro",
            paddingBottom: "1rem",
            marginBottom: "1rem",
        }}>
            <StoryPreview story={story}/>

            <Typography variant={"caption"}>
                <Link href={story.url}>{story.url}</Link>
            </Typography>
        </Box>

        <Typography variant={"caption"}>Comments: {story.descendants}</Typography>

        {story.kids?.map((id, key) => <Comment id={id} key={key}/>)}
    </Stack>
}

export default StoryPage
