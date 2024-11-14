import { FaFacebook, FaTwitter, FaInstagram,FaLinkedin,FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
    return (
        <div>
            <div className="mt-[90px] bg-[url('/images/more/footerbg.jpeg')] flex flex-col xl:flex-row items-center text-center xl:text-left justify-center">
                <div className="items-center content-center">
                    <img className='w-14 mb-4  place-self-center xl:place-self-start' src="/images/more/logo1.png" alt="" />
                    <h3 className='font-Rancho mb-6'>Espresso Emporium</h3>
                    <p className='max-w-[497px] mb-6 text-[#1B1A1A]'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className="flex gap-x-[14px] mb-6 place-self-center xl:place-self-start ">
                        <p className="w-[30px]"><FaFacebook /></p>
                        <p className="w-[30px]"><FaTwitter /></p>
                        <p className="w-[30px]"><FaInstagram /></p>
                        <p className="w-[30px]"><FaLinkedin /></p>
                    </div>
                    <h3 className="font-Rancho mb-6">Get in Touch</h3>
                    <div className="place-self-center xl:place-self-start">
                        <p className="text-[#1B1A1A] flex gap-x-5 mb-3"><FaPhoneAlt /><span>+88 01533 333 333</span></p>
                        <p className="text-[#1B1A1A] flex gap-x-5 mb-3"><MdEmail /><span>info@gmail.com</span></p>
                        <p className="text-[#1B1A1A] flex gap-x-5 mb-3"><MdLocationOn /><span>72, Wall street, King Road, Dhaka</span></p>
                    </div>
                </div>
                <div className="my-auto">
                    <h3 className="font-Rancho">Connect with Us</h3>
                    <input className="py-[11px] pl-[9px] mb-3 w-full sm:w-[377px]" type="text" name="" id="" placeholder="Name"
                    />
                    <br />
                    <input className="py-[11px] pl-[9px] mb-3 w-full sm:w-[377px]" type="text" name="" id="" placeholder="Email"
                    />
                    <br />
                    <textarea className="py-[11px] pl-[9px] mb-3 w-full sm:w-[377px]" name="" id="" placeholder="Message"></textarea>
                    <br />
                    <button className="font-Rancho py-[6px] px-4 border-2 border-black rounded-3xl">Send Message</button>
                </div>
            </div>
            <div className="bg-[url('/images/more/24.jpg')] bg-no-repeat bg-cover bg-center text-center py-3">
                <p className="font-Rancho text-white">Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;