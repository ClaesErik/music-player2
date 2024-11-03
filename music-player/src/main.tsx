import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { MainContextProvider } from "./context/mainContext/MainContextProvider";
import { router } from "./routes/routes";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <MainContextProvider>
            <RouterProvider router={router} />
        </MainContextProvider>
    </StrictMode>
);
