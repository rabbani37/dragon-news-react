import Marquee from "react-fast-marquee";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import NavBar from "../shared/NavBar/NavBar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BrackingNews from "./BrackingNews";
import { useLoaderData } from "react-router";
import NewsCard from "./newsCard";

const Home = () => {

    const newses = useLoaderData();



    return (
        <div>
            <Header></Header>
            <BrackingNews />
            <NavBar></NavBar>


            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="col-span-1 ">
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className=" lg:col-span-2 ">
                    <h1 className="text-center text-3xl ">News comming soon</h1>
                    <div>
                        {
                            newses.map(news => <NewsCard
                                 news={news}
                                  key={news._id}
                                  ></NewsCard>)
                        }
                    </div>

                </div>

                <div className="col-span-1 ">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;