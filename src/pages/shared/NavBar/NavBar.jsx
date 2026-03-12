import { Link, NavLink } from "react-router";
import userDefaultProfile from "../../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../../ContextProvider/contextCreate";

const NavBar = () => {


    const navList = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink>About</NavLink></li>
        <li><NavLink to={`/newsDetails`}>News</NavLink></li>
    </>


    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("Sign-out successful.")
            }).catch((error) => {
                console.log(error.messege)
            });
    }


    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navList}
                    </ul>
                </div>
                <a className=""></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navList}
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <div className="avatar">
                    <div className="w-10 rounded-full ">
                        <img src={userDefaultProfile} />
                    </div>
                </div>
                <div>
                    {
                        user ?
                            <span onClick={handleLogOut} className="btn btn-neutral text-white">SIGN OUT</span>
                            :
                            <Link to={"/login"}><p className="btn btn-neutral text-white">LOGIN</p></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;




