import React from 'react'
import { Contact } from './Contact';
import { Footer } from '../Footer/Footer';
import { Link } from 'react-router-dom';

export const ContactHome = () => {
     return (
          <>
               <div className='contact-home-container'>
                    <div className='contact-home'>
                         <h1>Contact Us</h1>
                         <Link className='contact-home-link' to='/'>Home</Link>
                         Contact
                    </div>
               </div>
               <Contact />
               <Footer />
          </>
     )
}
