import React from 'react'
import pic from '../img/pic.jpg';
import { Link } from "react-router-dom";

export const Blog = () => {
     return (
          <>
               <div className='blog'>
                    <h1>READ OUR BLOG</h1>
                    <p className='blog-h'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className='blog-container'>
                         <div className='blog-item'>
                              <Link className='blog-Link' to='/blog-page'>
                                   <img srcSet={pic} alt="pic" />
                                   <h2>The Delicious Pizza</h2>
                                   <p>
                                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                   </p>
                              </Link>
                         </div>
                         <div className='blog-item'>
                              <Link to='/blog-page' className='blog-Link'>
                                   <img srcSet={pic} alt="pic" />
                                   <h2>The Delicious Pizza</h2>
                                   <p>
                                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                   </p>
                              </Link>
                         </div>
                         <div className='blog-item'>
                              <Link to='/blog-page' className='blog-Link'>
                                   <img srcSet={pic} alt="pic" />
                                   <h2>The Delicious Pizza</h2>
                                   <p>
                                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                   </p>
                              </Link>
                         </div>
                         <div className='blog-item'>
                              <Link to='/blog-page' className='blog-Link'>
                                   <img srcSet={pic} alt="pic" />
                                   <h2>The Delicious Pizza</h2>
                                   <p>
                                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                   </p>
                              </Link>
                         </div>
                         <div className='blog-item'>
                              <Link to='/blog-page' className='blog-Link'>
                                   <img srcSet={pic} alt="pic" />
                                   <h2>The Delicious Pizza</h2>
                                   <p>
                                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                   </p>
                              </Link>
                         </div>
                         <div className='blog-item'>
                              <Link to='/blog-page' className='blog-Link'>
                                   <img srcSet={pic} alt="pic" />
                                   <h2>The Delicious Pizza</h2>
                                   <p>
                                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                   </p>
                              </Link>
                         </div>
                    </div>
               </div>
          </>
     )
}
