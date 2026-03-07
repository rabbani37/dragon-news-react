import Marquee from "react-fast-marquee";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import NavBar from "../shared/NavBar/NavBar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BrackingNews from "./BrackingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BrackingNews />
            <NavBar></NavBar>
            <h1 className="text-3xl text-center font-poppins  ">This is Home</h1>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="col-span-1 border">
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className=" lg:col-span-2 border">
                    <h1 className="text-center text-3xl ">News comming soon</h1>
                   
                </div>

                <div className="col-span-1 ">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;