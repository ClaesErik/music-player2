import { useContext } from "react";
import { mainContext } from "../context/mainContext/mainContext";

export const useMainContext = () => {
    const { musics, playlists, isFetchingInitialData } =
        useContext(mainContext);

    return { musics, playlists, isFetchingInitialData };
};
