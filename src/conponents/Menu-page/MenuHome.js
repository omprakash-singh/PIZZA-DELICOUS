import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from './Menu';
import '../../App.css';
import { Footer } from '../../conponents/Footer/Footer'

export const MenuHome = () => {
     return (
          <>
               <div className='menu-home-container'>
                    <div className='menu--home'>
                         <h1>
                              Our Menu
                         </h1>
                         <Link className='Menu-home-Link' to='/'>Home</Link>
                         Menu
                    </div>
               </div>

               <Menu />
               <Footer />
          </>
     )
}
