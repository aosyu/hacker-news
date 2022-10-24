import {Stack} from "@mui/material";
import {useEffect} from "react";
import {UPDATE_TIMEOUT} from "../../utils/constants/constants";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getTopStories} from "../../redux/stories/thunkActions";
import StoryPreview from "../../components/StoryPreview";
import { CenteredLoader } from "../../components/styled/CenteredLoader";

const HomePage = () => {
    const dispatch = useAppDispatch()

    const stories = useAppSelector(state => state.storiesReducer.stories)
    const isLoading = useAppSelector(state => state.storiesReducer.storiesAreLoading)

    const getStories = () => dispatch(getTopStories()).unwrap()

    useEffect(() => {
        getStories()
        const interval = setInterval(getStories, UPDATE_TIMEOUT)

        return () => clearInterval(interval)
        // eslint-disable-next-line
    }, [])

    if (isLoading) {
        return <CenteredLoader/>
    }

    return <Stack gap={"1rem"}>
        {stories && stories.map(
            (story, key) => <StoryPreview story={story} key={key}/>
        )}
    </Stack>
}

export default HomePage
