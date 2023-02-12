import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Button from '../Button/Button'

const Singleproduct = () => {
    const singledata=useLoaderData()
    const navigate=useNavigate()
    const {strCategory,strMealThumb,strInstructions,strYoutube}=singledata.meals[0]
    return (
        <div className='container mx-auto py-2'>
           <div className='grid grid-cols-2 gap-2'>
            <img className='rounded-lg' src={strMealThumb}/>
            <div>
            <h1 className='text-[40px] text-white'>{strCategory}</h1>
            <p className='text-white text-2xl]'>{strInstructions}</p>
             <button className='bg-[green] text-white py-2 px-5'><a  href={strYoutube} target="_blank">Youtube</a></button>
            </div>
           </div>
           <div className='py-3 text-center'>
           <Button handleclick={()=>navigate('/home')} mycolor='py-[5px] rounded-md' title='Product'></Button>
           </div>
        </div>
    );
};

export default Singleproduct;