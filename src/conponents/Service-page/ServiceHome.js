import React from 'react'
import { Sevice } from './Sevice';
import { Link } from 'react-router-dom';
import { Footer } from '../../conponents/Footer/Footer'
import bg_2 from '../img/bg_2.png';

export const ServiceHome = () => {
     return (
          <>
               <div className='service-home-container'>
                    <div className='service-home'>
                         <h1>Our Service</h1>
                         <Link className='service-home-link' to="/">Home</Link>
                         Service
                    </div>
               </div>
               <Sevice />

               <div className='service-home-hot-meal'>
                    <h1>HOT MEALS</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className='service-home-hot-meal-menu'>
                         <div className='service-home-hot-meal-item'>
                              <img srcSet={bg_2} alt="Menu" />
                              <h1>Itallian Pizza</h1>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                              <h5>$5.90</h5>
                              <button className='service-home-menu-btn'>Add to Cart</button>
                         </div>
                         <div className='service-home-hot-meal-item'>
                              <img srcSet={bg_2} alt="Menu" />
                              <h1>Itallian Pizza</h1>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                              <h5>$5.90</h5>
                              <button className='service-home-menu-btn'>Add to Cart</button>
                         </div>
                         <div className='service-home-hot-meal-item'>
                              <img srcSet={bg_2} alt="Menu" />
                              <h1>Itallian Pizza</h1>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                              <h5>$5.90</h5>
                              <button className='service-home-menu-btn'>Add to Cart</button>
                         </div>
                         <div className='service-home-hot-meal-item'>
                              <img srcSet={bg_2} alt="Menu" />
                              <h1>Itallian Pizza</h1>
                              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                              <h5>$5.90</h5>
                              <button className='service-home-menu-btn'>Add to Cart</button>
                         </div>
                    </div>
               </div>


               <Footer />
          </>
     )
}
