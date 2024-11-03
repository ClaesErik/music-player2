import { axiosInstance } from "../libs/axios";

export const getPlaylist = async () => {
    try {
        const results = await axiosInstance.get("lists");
        // TODO: Remover o throw new error
        throw new Error("void");
        return results.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};
