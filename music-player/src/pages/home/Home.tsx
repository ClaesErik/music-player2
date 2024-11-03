import { useNavigate } from "react-router-dom";
import { useMainContext } from "../../hooks/useMainContext";
import PlaylistCard from "./components/PlaylistCard/PlaylistCard";

const Home = () => {
    const navigate = useNavigate();
    const { isFetchingInitialData, playlists } = useMainContext();
    const token = localStorage.getItem("token");

    if (!token) navigate("/login");

    if (isFetchingInitialData) return <p>Loading...</p>;

    return (
        <div>
            <h3>List of Playlists</h3>
            {playlists.map((playlist) => (
                <PlaylistCard playlist={playlist} />
            ))}
        </div>
    );
};

export default Home;
