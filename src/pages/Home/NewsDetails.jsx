import { Link, useNavigate, useParams } from "react-router";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";



const NewsDetails = () => {
    const { news_ID } = useParams()
    console.log(news_ID)

    const navigate = useNavigate()
    return (
        <div>
            <Header />
            <Link className="btn" onClick={()=>navigate(-1)}>Back</Link>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h2>news detrail: {news_ID}</h2>
                </div>
                <div className="col-span-1">
                    <RightSideNav />
                </div>

            </div>
            
        </div>
    );
};

export default NewsDetails;