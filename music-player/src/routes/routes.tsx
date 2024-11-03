import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Playlist from "../pages/playlist/Playlist";
import Musics from "../pages/musics/Musics";
import Login from "../pages/login/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "playlist/:playlistId",
        element: <Playlist />,
    },
    {
        path: "musics",
        element: <Musics />,
    },
]);
