import React from 'react';
import logo from '../assets/logo.png';
import moment from 'moment/moment';

const Header = () => {
    return (
        <div className='max-w-[1440px] mx-auto text-center mt-12 mb-8'>
            <img className='mx-auto mb-5' src={logo} alt="" />
            <p className='mb-2 text-lg text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium'><span>{moment().format("dddd")}, </span><span className='text-[#706F6F]'>{moment().format("MMMM D, YYYY")}</span></p>
        </div>
    );
};

export default Header;