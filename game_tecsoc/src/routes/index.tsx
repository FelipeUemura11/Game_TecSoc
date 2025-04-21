import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Fases from "../pages/Fases";
import Fase1 from "../pages/Fase1";
import Fase2 from "../pages/Fase2";
import Fase3 from "../pages/Fase3";
import Fase4 from "../pages/Fase4";
import Fase5 from "../pages/Fase5";

const AppRoutes:FC = () => {

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/fases" element={<Fases />} />
            <Route path="/fase1" element={<Fase1 />} />
            <Route path="/fase2" element={<Fase2 />} />
            <Route path="/fase3" element={<Fase3 />} />
            <Route path="/fase4" element={<Fase4 />} />
            <Route path="/fase5" element={<Fase5 />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;