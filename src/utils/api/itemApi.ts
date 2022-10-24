import {axiosClient} from "./axiosClient";
import {ItemView} from "../../redux/items/ItemView";

export const itemApi = {
    getItemById(id: number) {
        return axiosClient.get<ItemView>(`item/${id}.json`)
    }
}
