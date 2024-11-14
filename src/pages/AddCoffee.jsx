import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const AddCoffee = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const handleSubmit = e => {
        if(user) {
            e.preventDefault()
            const name = e.target.name.value
            const chef = e.target.chef.value
            const supplier = e.target.supplier.value
            const price = e.target.price.value
            const category = e.target.category.value
            const details = e.target.details.value
            const photo = e.target.photo.value
            const coffee = {name, chef, supplier, price, category, details, photo}
            fetch('https://server-5twdi10qv-nifazurs-projects.vercel.app/coffees',{
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(coffee)
            })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        e.target.reset()
                    }
                })
        } else{
            navigate('/signIn', { state: { from: location.pathname } })
        }
    }
    return (
        <div className="bg-[url('/images/more/11.png')]">
            <div className='text-center mt-9'>
                <button className='font-Rancho'><h5>Back to home</h5></button>
            </div>
            <div className="bg-[#F4F3F0] py-[52px] w-screen xl:w-[990px] mx-auto mt-[100px]">
                <div className='text-center'>
                    <h3 className='text-[#374151] font-Rancho mb-6'>Add New Coffee</h3>
                    <p className='max-w-[699px] mx-auto text-[#1b1a1a] text-opacity-70 mb-6'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 sm:grid-cols-2 gap-[18px] mx-auto w-full px-4 sm:px-10 xl:w-[822px]'>
                    <div className='text-[#464544]'>
                        <label htmlFor="Name">Name</label>
                        <br />
                        <input className='w-full text-[12px] rounded py-2 pl-2' required  type="text" name="name" id="" placeholder='Enter coffee name' 
                        />
                    </div>
                    <div>
                        <label htmlFor="Name">Chef</label>
                        <br />
                        <input className='w-full text-[12px] rounded py-2 pl-2' required type="text" name="chef" id=""  placeholder='Enter coffee chef'
                        />
                    </div>
                    <div>
                        <label htmlFor="Name">Supplier</label>
                        <br />
                        <input className='w-full text-[12px] rounded py-2 pl-2' required type="text" name="supplier" id=""  placeholder='Enter coffee supplier'
                        />
                    </div>
                    <div>
                        <label htmlFor="Name">Price</label>
                        <br />
                        <input className='w-full text-[12px] rounded py-2 pl-2' required type="text" name="price" id=""  placeholder='Enter coffee price'
                        />
                    </div>
                    <div>
                        <label htmlFor="Name">Category</label>
                        <br />
                        <input className='w-full text-[12px] rounded py-2 pl-2' required type="text" name="category" id=""  placeholder='Enter coffee category'
                        />
                    </div>
                    <div>
                        <label htmlFor="Name">Details</label>
                        <br />
                        <input className='w-full text-[12px] rounded py-2 pl-2' required type="text" name="details" id=""  placeholder='Enter coffee details'
                        />
                    </div>
                    <div className='sm:col-span-2'>
                        <label htmlFor="Name">Photo</label>
                        <br />
                        <input className='w-full text-[12px] rounded py-2 pl-2' required type="text" name="photo" id=""  placeholder='Enter coffee photo'
                        />
                    </div>
                    <button className='sm:col-span-2 text-[#331A15] py-[9px] bg-[#D2B48C] border-[1px] border-[#331A15] rounded'>Add New Coffee</button>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;