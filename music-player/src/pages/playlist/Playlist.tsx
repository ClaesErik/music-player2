import { useParams } from "react-router-dom";
import { useMainContext } from "../../hooks/useMainContext";
import MusicCard from "./components/MusicCard/MusicCard";

const Playlist = () => {
    const { playlistId } = useParams();
    const { playlists } = useMainContext();

    if (!playlistId) return;

    const playlistData = playlists.find(
        (playlist) => playlist.id === Number(playlistId)
    );

    if (!playlistData) return <>Not found any playlist with that ID</>;

    return (
        <div>
            {playlistData.music.map((music) => (
                <MusicCard music={music} />
            ))}
        </div>
    );
};

export default Playlist;
