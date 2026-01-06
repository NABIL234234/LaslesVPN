import { useRoutes } from "react-router-dom";
import Home from "../pages/Home/home";
import Login from "../pages/Login/login"

function RouterView() {
    const element = useRoutes([
        { path: "/", element: <Home /> },
   { path: "/authorization/:mode?", element: <Login /> }
    ]);
    return <>{element}</>;
}

export default RouterView;
