import { FiCoffee } from "react-icons/fi";
import CoffeeCard from "./CoffeeCard";
const PopularCoffee = ({coffees}) => {
    return (
        <div className="relative">
            <div className="mt-[90px] flex flex-col items-center">
                <p>--- Sip & Savor ---</p>
                <h2 className="font-Rancho text-[#331A15]">Our Popular Products</h2>
                <button className="flex gap-x-[6px] font-Rancho text-white px-4 py-[6px] bg-[#E3B577] items-center rounded border-2 border-black">Add Coffee <span className="text-black"><FiCoffee /></span></button>
            </div>
            <div className="mx-auto mt-9 grid gap-[18px] xl:grid-cols-2 xl:max-w-[990px] items-center justify-center">
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                }
            </div>
            <img className="absolute top-0 opacity-40" src="/images/more/4.png" alt="" />
            <img className="absolute right-0 top-[120px]" src="/images/more/5.png" alt="" />
        </div>
    );
};

export default PopularCoffee;