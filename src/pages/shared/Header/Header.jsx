import moment from "moment";
import Logo from "../../../assets/logo.png"

const Header = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center mt-12 ">
                <img className="w-1/2 mb-4" src={Logo} alt="" />
                <p className="text-gray-400 mb-3">Journalism Without Fear or Favour</p>
                <p className="font-medium">{moment().format('dddd')} <span className="text-gray-500">{moment().format('MMMM DD, YYYY')}</span></p>
            </div>



        </div>
    );
};

export default Header;