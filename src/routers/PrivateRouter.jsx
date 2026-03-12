import { useContext } from "react";
import { AuthContext } from "../ContextProvider/contextCreate";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({ children }) => {
    const location = useLocation()

    console.log(location)

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <span className="loading loading-ring loading-xl"></span>
    }
    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to={'/login'} />
};

export default PrivateRouter;