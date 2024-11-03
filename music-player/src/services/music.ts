import { axiosInstance } from "../libs/axios";

export const getMusics = async () => {
    try {
        const results = await axiosInstance.get("musics");

        return results.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};
