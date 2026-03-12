import { Link, Navigate, useLocation, useNavigate, } from "react-router";
import NavBar from "../shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/contextCreate";

const Login = () => {

    const { signInEmailPass } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    console.log(location)

    const handleSignIn = (e) => {
        e.preventDefault();
        const forms = new FormData(e.currentTarget);

        const email = forms.get("email")
        const password = forms.get("password")


        // sign in 
        signInEmailPass(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("Signed in ", user);

                if (location?.state) {
                    navigate(location.state)
                }
                else {
                    navigate('/')
                }



            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorMessage)
            });
    }



    return (
        <div>
            <NavBar />
            <div className="flex justify-center items-center min-h-screen bg-gray-100 font-sans p5">
                <div className="bg-white p-10 md:w-md w-lg rounded-xl shadow-lg text-center">
                    <h2 className="text-2xl font-bold mb-5">Login</h2>
                    <form onClick={handleSignIn} className="flex flex-col gap-3">
                        <input name="email" type="email" placeholder="Email Address" className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        <input name="password" type="password" placeholder="Password" className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        <button className="w-full mt-3 bg-indigo-600 text-white py-3 rounded-md text-base hover:bg-indigo-700 transition">Login</button>
                    </form>
                    <p className="mt-4 text-sm">Don't have an account? <Link to="/register" className="text-indigo-600 font-semibold hover:underline">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;