import React from 'react';
import Logo from '../../cityLogo.svg';
import './Nav_bar.scss';


 function Navbar() {
    return (
        <div className='Navbar'>
            <img src={Logo} alt='city tour firm'/>
           
                <ul className='nav-links'>
                    <li><a href='/' className='nav-link' >home</a></li>
                    <li><a href='/' className='nav-link'>about</a></li>
                    <li><a href='/' className='nav-link  active' >tours</a></li>
                </ul>
                
          
           
        </div>
    )
}

export default Navbar;
