import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Meailcard from './Meailcard';

const Home = () => {
    const data=useLoaderData()
    const [pop,setpop]=useState(null)
    console.log(pop)
    return (
        <div className='container mx-auto py-[20px]'>
           <div className='flex flex-wrap gap-3 justify-center'>
            {data?.meals.map(list=><Meailcard handleimage={()=>setpop(list)} key={list.idMeal} mail={list}></Meailcard>)}
           </div>
           {/* pop pop alert */}
           {pop && <div className='fixed top-0 left-0 bg-[#306c7b] w-screen h-screen'>
            <div className='flex justify-center items-center h-full'>
             <div onClick={()=>setpop(null)} className='fixed right-5 top-5 text-white text-[40px] cursor-pointer'>X</div>
              <img src={pop?.strMealThumb}/>
            </div>
           </div>}
        </div>
    );
};

export default Home;