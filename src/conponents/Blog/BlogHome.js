import React from 'react'
import { Blog } from './Blog';
import { Footer } from '../Footer/Footer';
import { Link } from 'react-router-dom';

export const BlogHome = () => {
     return (
          <>
               <div className='blog-home-conatiner'>
                    <div className='bog-home'>
                         <h1>Read Our Blog</h1>
                         <Link className='blog-home-link' to='/'>Home</Link>
                         Blog
                    </div>
               </div>
               <Blog />
               <Footer />
          </>
     )
}
