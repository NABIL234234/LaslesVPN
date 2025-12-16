import { useRoutes } from "react-router-dom";
import Home from "../pages/Home/Hero/Hero";

function RouterView() {
  const element = useRoutes([{ path: "/", element: <Home /> }]);
  return <>{element}</>;
}

export default RouterView;
