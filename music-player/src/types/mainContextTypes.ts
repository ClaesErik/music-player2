import { Music } from "./music";
import { Playlist } from "./playlist";

export type MainContextTypes = {
    musics: Music[];
    playlists: Playlist[];
    isFetchingInitialData: boolean;
};
