import React from 'react';
// import images

import Logo from '../assets/logo.svg';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items=center'>
        {/* logo */}
        <a href='#'>
        <img src={Logo} alt=''/>
        </a>
        {/* button */}
        <button className='btn btn-sm'>Connect me</button>

      </div>
    </div>
  </header>
};

export default Header;
