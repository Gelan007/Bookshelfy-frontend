import React from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../utils/routes/routes";
import NotFound from "./notFound/NotFound";

interface AppRouterProps {
    isAuth?: boolean
}

const AppRouter:React.FC<AppRouterProps> = ({isAuth = true}) => {
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}

            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRouter;