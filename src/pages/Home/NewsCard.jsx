import { Bookmark, EyeIcon, Share2, Star } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const NewsCard = ({ news }) => {

    const [readMore, setReadMore] = useState(false)

    const { _id, details, thumbnail_url, total_view, author, title, rating } = news;
    return (

        <div >
            <div className="  mb-5 bg-white rounded-lg shadow-md overflow-hidden font-sans
           
            ">

                <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-3">
                        <img className="w-10 h-10 rounded-full" src={author.img} alt="author" />
                        <div>
                            <h4 className="text-sm font-semibold">{author.name}</h4>
                            <p className="text-xs text-gray-500">{author.published_date}</p>
                        </div>
                    </div>
                    <div className="flex gap-3 text-gray-500">
                        <span className="cursor-pointer"><Bookmark /></span>
                        <span className="cursor-pointer"><Share2 /></span>
                    </div>
                </div>

                <div className="p-4">
                    <h2 className="text-lg font-bold leading-snug mb-3">{title} </h2>

                    <Link to={`newsDetails/${_id}`}>
                        <img
                            className="rounded-lg mb-4 w-full h-60  "
                            src={thumbnail_url}
                            alt="news"
                        />

                    </Link>

                    <p className="text-sm text-gray-600 leading-relaxed">
                        {readMore ? details : details.slice(0, 250)}
                    </p>

                    <button onClick={() => setReadMore(!readMore)} className="text-orange-500 hover:underline font-semibold ">{readMore ? "Read Less" : "Read More..."}</button>
                </div>

                <div className="flex items-center justify-between px-4 py-3 border-t">
                    <div className="flex items-center gap-2 text-orange-400">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <span className="text-gray-700 text-sm ml-1">{rating.number}</span>
                    </div>

                    <div className="flex jucen items-center gap-1 text-gray-500 text-sm">
                        <EyeIcon />
                        <span> {total_view}</span>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default NewsCard;