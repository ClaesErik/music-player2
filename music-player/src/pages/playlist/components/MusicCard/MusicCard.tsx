import { Music } from "../../../../types/music";

type MusicCardProps = {
    music: Music;
};

const MusicCard = ({ music }: MusicCardProps) => {
    return (
        <div>
            {music.name} - {music.album} - {music.compositor}
        </div>
    );
};

export default MusicCard;
