import { useForm } from "react-hook-form";
import { Link } from "react-router";
import NavBar from "../shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/contextCreate";




const Register = () => {

    const { createUserEmailPass } = useContext(AuthContext);



    const {
        register,
        handleSubmit,
    } = useForm();


    const handleRegister = (data) => {
        const name = data.name;
        const photo = data.photo;
        const email = data.email;
        const password = data.password;

        console.log(name, email, password)
        console.log(data);

        // user create
        createUserEmailPass(email, password, name, photo)
            .then(result => {
                const user = result.user;

                console.log(user.displayName)

                
            })
            .then(errors => {
                console.log(errors)
            })
    }

    return (
        <div>
            <NavBar />
            <div className="flex justify-center items-center min-h-screen bg-gray-100 font-sans p5">
                <div className="bg-white p-10 md:w-md w-lg rounded-xl shadow-lg text-center">

                    <h2 className="text-2xl font-bold mb-5">Please Register here</h2>

                    <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col gap-3">
                        <input {...register("name")} type="text" placeholder="Name" className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        <input {...register("photo")} type="text" placeholder="Photo url (optional)" className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />

                        <input {...register("email")} type="email" placeholder="Email Address" className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        <input {...register("password")} type="password" placeholder="Password" className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        <button type="submit" className="w-full mt-3 bg-indigo-600 text-white py-3 rounded-md text-base hover:bg-indigo-700 transition">Register</button>
                    </form>


                    <p className="mt-4 text-sm">Alreasy have an account? <Link to="/Login" className="text-indigo-600 font-semibold hover:underline">login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;