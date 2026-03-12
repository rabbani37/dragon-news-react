import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsDetails from "../pages/Home/newsDetails";
import PrivateRouter from "./PrivateRouter";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("news.json")
            },
            {
                path: "/newsDetails/:news_ID",
                element: <PrivateRouter><NewsDetails /></PrivateRouter>
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Register
            }
        ]
    },
]);

export default router;