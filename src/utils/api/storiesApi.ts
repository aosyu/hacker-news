import {axiosClient} from "./axiosClient";

export const storiesApi = {
    getTopStoriesIds() {
        return axiosClient.get<number[]>('topstories.json');
    },
}
