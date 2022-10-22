import {axiosClient} from "./axiosClient";
import {StoryView} from "../../redux/stories/storiesSlice";

export const storiesApi = {
    getTopStories() {
        return axiosClient.get<number[]>('topstories.json');
    },
    getStoryById(storyId: number) {
        return axiosClient.get<StoryView>(`item/${storyId}.json`)
    }
}
