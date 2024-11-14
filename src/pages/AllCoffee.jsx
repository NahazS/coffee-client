import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './Home/homeComponents/CoffeeCard';
import Swal from 'sweetalert2'


const AllCoffee = () => {
    const coffees = useLoaderData()
    const [coffeeUpdate, setCoffeeUpdate] = useState(coffees)
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://server-5twdi10qv-nifazurs-projects.vercel.app/coffees/${id}`,{
                  method: "DELETE"
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if(data.deletedCount === 1)
                {
                    const remainingCoffee = coffeeUpdate.filter(coffee => coffee._id !== id )
                    setCoffeeUpdate(remainingCoffee)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
              })
            }
          });
        
    }
    return (
        <div className='mx-auto mt-9 grid gap-[18px] xl:grid-cols-2 xl:max-w-[990px] items-center justify-center'>
            {
                coffeeUpdate.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} handleDelete={handleDelete}></CoffeeCard>)
            }
        </div>
    );
};

export default AllCoffee;