import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { mainContext } from "./mainContext";
import { Music } from "../../types/music";
import { Playlist } from "../../types/playlist";
import { getMusics } from "../../services/music";
import { getPlaylist } from "../../services/playlist";

type MainContextProviderProps = {
    children: ReactNode;
};

export const MainContextProvider = ({ children }: MainContextProviderProps) => {
    const [musics, setMusics] = useState<Music[]>([]);
    const [playlists, setPlaylists] = useState<Playlist[]>([]);
    const [isFetchingInitialData, setIsFetchingInitialData] = useState(true);

    const fetchMusics = async () => {
        const musicsResult = await getMusics();
        setMusics(musicsResult);
    };

    const fetchPlaylists = async () => {
        const playlistResults = await getPlaylist();
        setPlaylists(playlistResults);
    };

    const fetchInitialData = useCallback(async () => {
        await fetchMusics();
        await fetchPlaylists();
        setIsFetchingInitialData(false);
    }, []);

    useEffect(() => {
        fetchInitialData();
    }, [fetchInitialData]);

    const value = useMemo(
        () => ({ musics, playlists, isFetchingInitialData }),
        [isFetchingInitialData, musics, playlists]
    );

    return (
        <mainContext.Provider value={value}>{children}</mainContext.Provider>
    );
};
