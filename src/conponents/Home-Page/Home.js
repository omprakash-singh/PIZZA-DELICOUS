import React from 'react'
import '../../App.css'
import bg_1 from '../img/bg_1.png';
import bg_2 from '../img/bg_2.png';
import { Sevice } from '../Service-page/Sevice';
import { Menu } from '../Menu-page/Menu';
import { Footer } from '../Footer/Footer';
import { Contact } from '../Contact/Contact';
import { About } from '../About-page/About';
import { Blog } from '../Blog/Blog';

export const Home = () => {
     return (
          <>
               <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                         <div className="carousel-item active">
                              <div className='d-block w-100'>
                                   <div className='first'>
                                        <div className='first-container'>
                                             <h2>Welcome</h2>
                                             <h1>We cooked your desired Pizza Recipe</h1>
                                             <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                             <button className='order-btn'>Order Now</button>
                                             <button className='view-btn'>View Menu</button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="carousel-item">
                              <div className='d-block w-100'>
                                   <div className='second'>
                                        <div className='item1'>
                                             <img srcSet={bg_1} alt='bg_1' />
                                        </div>
                                        <div className='item2'>
                                             <h2>Delicious</h2>
                                             <h1>Italian Cuizine</h1>
                                             <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                             <button className='order-btn'>Order Now</button>
                                             <button className='view-btn'>View Menu</button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="carousel-item">
                              <div className='d-block w-100'>
                                   <div className='second'>

                                        <div className='item2'>
                                             <h2>Crunchy</h2>
                                             <h1>Italian Pizza</h1>
                                             <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                             <button className='order-btn'>Order Now</button>
                                             <button className='view-btn'>View Menu</button>
                                        </div>
                                        <div className='item1'>
                                             <img srcSet={bg_2} alt='bg_2' />
                                        </div>
                                   </div>

                              </div>
                         </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                         <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
                         <span className="visually-hidden">Next</span>
                    </button>
               </div>
               <About />
               <Sevice />
               <Menu />
               <Blog />
               <Contact />
               <Footer />
          </>
     )
}
