import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

const Meailcard = ({mail,handleimage}) => {
    const {idMeal,strMeal,strMealThumb}=mail
    const navigate=useNavigate()
    return (
        <div  className='w-[300px] p-2 rounded-md border border-[red] cursor-pointer'>
            <img onClick={handleimage} src={strMealThumb}/>
            <p>{strMeal}</p>
            <Button handleclick={()=>navigate(`/home/${idMeal}`)} mycolor='w-full py-2 rounded-md' title='Details'></Button>
        </div>
    );
};

export default Meailcard;