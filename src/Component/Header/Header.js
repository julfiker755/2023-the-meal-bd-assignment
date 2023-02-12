import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-[#147d89] text-white py-[10px] sticky top-0'>
            <ul className='flex justify-center space-x-2'>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/product/52802">Product</Link></li>
                <li><Link to="/about">Contact</Link></li>
            </ul>
        </div>
    );
};

export default Header;