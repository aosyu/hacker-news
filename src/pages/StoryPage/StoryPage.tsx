import {Box} from "@mui/material";
import {useParams} from "react-router-dom";

const StoryPage = () => {
    const {storyId} = useParams<{ storyId: string }>()

    return <Box>
        {storyId}
    </Box>
}

export default StoryPage
