import { useEffect, useState } from "react";
import { Link } from "react-router";


const CategoryList = () => {
    const [cetegories, setCotegories] = useState([]);

    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCotegories(data))
    }, [])


    console.log(cetegories.length);
    return (
        <div>
            <h2 className="text-xl font-semibold">All Caterores {cetegories.length}</h2>
            <div>
                {
                    cetegories.map(list => <ul key={list.id}>
                        <Link>
                            <li className=" m-4 hover:bg-gray-200 p-3 rounded-md active:scale-101 ">{list.name}</li>
                        </Link>
                    </ul>)
                }
            </div>

        </div>
    );
};

export default CategoryList;