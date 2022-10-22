import {Divider, Link, Stack, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getStoryById} from "../../redux/stories/thunkActions";
import {CenteredLoader} from "../../components/styled/CenteredLoader";
import StoryPreview from "../../components/StoryPreview";

const StoryPage = () => {
    const {storyId} = useParams<{ storyId: string }>()

    const dispatch = useAppDispatch()

    const story = useAppSelector(state => state.storiesReducer.currentStory)

    const [isLoading, setIsLoading] = useState<boolean>(true)

    // const parseLink = (link: string) => {
    //     return link.substring(link.lastIndexOf(".", link.lastIndexOf(".") - 1) + 1).split("/")[0];
    // }

    // TODO :: isLoading from state
    useEffect(() => {
        if (!storyId) return

        setIsLoading(true)
        dispatch(getStoryById(Number(storyId))).unwrap()
            .then(() => setIsLoading(false))
        // TODO :: error handling
    }, [dispatch, storyId])

    if (isLoading || !storyId || !story) {
        return <CenteredLoader/>
    }

    return <Stack gap={1}>
        <StoryPreview story={story}/>

        <Divider/>

        <Typography variant={"caption"}>
            Link: <Link href={story.url}>{story.url}</Link>
        </Typography>

        <Divider/>

        <Typography variant={"caption"}>Comments: {story.descendants}</Typography>

        {story.kids.toString()}
    </Stack>
}

export default StoryPage
