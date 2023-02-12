import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Singleitem = () => {
    const singledata=useLoaderData()
    const {strCategory,strMealThumb,strInstructions,strYoutube}=singledata.meals[0]
    console.log(singledata.meals[0])
    return (
        <div className='container mx-auto py-2'>
           <div className='flex flex-wrap gap-7'>
             <div className='w-[500px]'><img className='rounded-lg' src={strMealThumb}/></div>
            <div className='w-[500px] h-full'>
            <h1 className='text-[40px] text-white'>{strCategory}</h1>
            <p className='text-white text-2xl]'>{strInstructions}</p>
             <button className='bg-[green] text-white py-2 px-5'><a  href={strYoutube} target="_blank">Youtube</a></button>
            </div>
           </div>
        </div>
    )
};

export default Singleitem;