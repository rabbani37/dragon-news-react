import { FaGithub, FaGoogle } from "react-icons/fa";


const LoginWith = () => {
    return (
        <div className="" >
            <h3 className="text-xl mb-2">Login With</h3>

            <div className="p-3">
                {/* Google */}
                <button className="btn mb-2 w-full bg-white text-blue-500 border-blue-500">
                    <FaGoogle />
                    Login with Google
                </button>

                {/* GitHub */}
                <button className=" btn w-full border-black  ">
                    <FaGithub />
                    Login with GitHub
                </button>
            </div>

        </div>
    );
};

export default LoginWith;