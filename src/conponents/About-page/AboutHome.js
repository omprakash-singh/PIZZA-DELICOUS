import React from 'react'
import { Link } from 'react-router-dom'
import { About } from './About'
import { Contact } from '../Contact/Contact'
import { Footer } from '../Footer/Footer';

export const AboutHome = () => {
     return (
          <>
               <div className='about-home-container'>
                    <div className='about-home'>
                         <h1>ABOUT</h1>
                         <Link className='about-home-link' to="/">Home</Link>
                         About
                    </div>
               </div>
               <About />
               <Contact />
               <Footer />
          </>
     )
}
