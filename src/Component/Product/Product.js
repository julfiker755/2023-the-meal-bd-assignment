import React from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';

const Product = () => {
    const lodata=useLoaderData()
    const navigate=useNavigate()
    return (
        <div className='container mx-auto py-[2px] flex'>
            <div className='w-[430px] h-[93vh] p-2 ring-2 rounded-lg overflow-auto'>
            {lodata.meals.map(({idMeal,strMealThumb,strCategory})=>(
                <div key={idMeal} className='flex bg-[#084c61] gap-3 my-3 rounded-md'>
                    <img className='w-[100px] h-[100px] rounded-l-lg' src={strMealThumb}/>
                     <div>
                     <h1 className='text-white capitalize truncate'>{strCategory}</h1>
                     <button onClick={()=>navigate(`/product/${idMeal}`)}  className='bg-[#307a8b] text-white rounded py-1 px-4 mt-1'>Show Details</button>
                     </div>
                </div>
            ))}
            </div>
            <div className='full p-[20px]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Product;