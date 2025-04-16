import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Fase1 from "../pages/Fase1";
import Game from "../pages/Game";

const AppRoutes:FC = () => {

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/game" element={<Game />} />
            <Route path="/fase1" element={<Fase1 />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;