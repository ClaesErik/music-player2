import { useNavigate } from "react-router-dom";
import { Playlist } from "../../../../types/playlist";

type PlaylistCardProps = {
    playlist: Playlist;
};

const PlaylistCard = ({ playlist }: PlaylistCardProps) => {
    const navigate = useNavigate();

    const onCardClick = () => navigate(`playlist/${playlist.id}`);

    return (
        <div onClick={onCardClick}>
            {playlist.name} - {playlist.owner}
        </div>
    );
};

export default PlaylistCard;
