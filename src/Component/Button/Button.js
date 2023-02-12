import React from 'react';

const Button = ({title="Default button",handleclick,mycolor}) => {
    return (
        <button
        className={`w-[200px] text-white bg-teal-800 ${mycolor}`}
        onClick={handleclick}
        >{title}</button>
    );
};

export default Button;