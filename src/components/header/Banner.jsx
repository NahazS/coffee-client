import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[url('/images/more/3.png')] h-[600px] bg-no-repeat bg-center bg-cover text-white font-Rancho content-center flex justify-around items-center">
            <div>
                <h1></h1>
            </div>
            <div className='px-4 md:px-0'>
                <h2>Would you like a Cup of Delicious Coffee?</h2>
                <p className="max-w-[543px] mt-3 mb-6">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='text-black bg-[#E3B577] py-[6px] px-[22px]'>Learn More</button>
            </div>
        </div>
    );
};

export default Banner;