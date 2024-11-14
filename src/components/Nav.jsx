import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <div className="pb-[15px] bg-[url('/images/more/15.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="flex justify-center ">
                    <img className="w-[45px] mr-4" src="/images/more/logo1.png" alt="" />
                    <h1 className="text-white font-Rancho">Espresso Emporium</h1>
                </div>
                <div className="hidden sm:flex gap-x-20 justify-center text-white text-opacity-60 font-Rancho">
                    <NavLink to={'/'}><h4>Home</h4></NavLink>
                    <NavLink to={'/all-coffee'}><h4>All Coffee</h4></NavLink>
                    <NavLink to={'/add-coffee'}><h4>Add Coffee</h4></NavLink>
                    <NavLink to={'/signIn'}><h4>Sign In</h4></NavLink>
                    <NavLink to={'/signUp'}><h4>Sign Up</h4></NavLink>
                </div>
            </div>
            
        </div>
    );
};

export default Nav;