import { IoEyeSharp, IoPencil, IoMenu } from "react-icons/io5";
import { IoMdTrash } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const CoffeeCard = ({coffee, handleDelete}) => {
    const {_id, name, chef, price, photo} = coffee
    const {user} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleEditCoffee = () => {
        if(user){
            navigate(`/edit-coffee/${_id}`)
        } else{
            navigate('/signIn', {state: {form:location.pathname}})
        }
    }
    const handleDeleteCoffee = () => {
        if(user){
            handleDelete(_id)
        } else{
            navigate('/signIn', {state: {form:location.pathname}})
        }
    }

    
    return (
        <div className="flex justify-between h-[225px] pr-9 max-w-[486px] items-center bg-[#F5F4F1] rounded-lg">
            <img className="h-[179px] max-w-[144px]" src={photo} alt="" />
            <div className="pr-4">
                <p className="font-semibold hidden sm:flex">Name: <span className="font-normal text-[#5C5B5B]">{name}</span></p>
                <p className="font-semibold hidden sm:flex">Chef <span className="font-normal text-[#5C5B5B]">{chef}</span></p>
                <p className="font-semibold hidden sm:flex">Price: <span className="font-normal text-[#5C5B5B]">{price} Taka</span></p>
            </div>
            <div>
                <p className="sm:hidden text-white w-[30px] h-[30px] bg-[#3C393B] rounded flex place-content-center place-items-center mb-3"><span className="w-[15px]"><IoMenu /></span></p>
                <p className="text-white w-[30px] h-[30px] bg-[#D2B48C] rounded flex place-content-center place-items-center mb-3"><Link to={`/coffees/${_id}`} className="w-[15px]"><IoEyeSharp /></Link></p>
                <p className="text-white w-[30px] h-[30px] bg-[#3C393B] rounded flex place-content-center place-items-center mb-3"><button onClick={handleEditCoffee} className="w-[15px]"><IoPencil /></button></p>
                <p className="text-white w-[30px] h-[30px] bg-[#EA4744] rounded flex place-content-center place-items-center mb-3"><button onClick={handleDeleteCoffee} className="w-[15px]"><IoMdTrash /></button></p>
            </div>
        </div>
    );
};

export default CoffeeCard;