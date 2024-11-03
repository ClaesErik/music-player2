import { Music } from "./music";

export type Playlist = {
    id: number;
    name: string;
    owner: string;
    music: Music[];
};
