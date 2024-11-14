import { useLoaderData } from "react-router-dom";

const FullDetails = () => {
    const coffee = useLoaderData()

    const {photo, name, chef, supplier, price, category, details} = coffee
    return (
        <div className="bg-[url('/images/more/11.png')]">
            <div className='text-center mt-9 mb-[50px]'>
                <button className='font-Rancho'><h5>Back to home</h5></button>
            </div>
            <div className=" h-fit md:h-[600px] bg-[#F4F3F0] flex flex-col md:flex-row justify-around max-w-[1320px] mx-auto rounded-md">
                <img className="w-[351px] h-[455px] flex my-auto mx-auto md:mx-0" src={photo} alt="" />
                <div className="flex flex-col my-auto mx-auto md:mx-0">
                    <h3 className="font-Rancho text-[#331A15] mb-8">Niceties</h3>
                    <div>
                        <h6 className="text-[#1B1A1A] font-semibold">Name:<span className="text-[#5C5B5B]">{name}</span></h6>
                        <h6 className="text-[#1B1A1A] font-semibold">Chef:<span className="text-[#5C5B5B]">{chef}</span></h6>
                        <h6 className="text-[#1B1A1A] font-semibold">Supplier:<span className="text-[#5C5B5B]">{supplier}</span></h6>
                        <h6 className="text-[#1B1A1A] font-semibold">Price:<span className="text-[#5C5B5B]">{price}</span></h6>
                        <h6 className="text-[#1B1A1A] font-semibold">Category:<span className="text-[#5C5B5B]">{category}</span></h6>
                        <h6 className="text-[#1B1A1A] font-semibold">Details:<span className="text-[#5C5B5B]">{details}</span></h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullDetails;