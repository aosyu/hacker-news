import {Stack} from "@mui/material";
import {useEffect} from "react";
import {UPDATE_TIMEOUT} from "../../utils/constants/constants";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getTopStories} from "../../redux/stories/thunkActions";
import StoryPreview from "../../components/StoryPreview";

const HomePage = () => {
    const dispatch = useAppDispatch()

    const stories = useAppSelector(state => state.storiesReducer.stories)

    const getStories = () => dispatch(getTopStories()).unwrap()

    useEffect(() => {
        getStories()
        const interval = setInterval(getStories, UPDATE_TIMEOUT)

        return () => clearInterval(interval)
        // eslint-disable-next-line
    }, [])

    return <Stack gap={"1rem"}>
        {stories && stories.map(
            (story, key) => <StoryPreview story={story} key={key}/>
        )}
    </Stack>
}

export default HomePage
