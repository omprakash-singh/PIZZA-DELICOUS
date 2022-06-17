import React from 'react'
// import '../Home-Page/Home.css'

import devivery_man from '../img/delivery-man.png';
import diet from '../img/diet.png';
import pizza from '../img/pizza.png';

export const Sevice = () => {
     return (
          <>
               <div className='service-container'>
                    <h1>OUR SERVICES</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className='service-item'>
                         <div className='service-item-1'>
                              <img srcSet={diet} alt="diet" />
                              <h3>HEALTHY FOODS</h3>
                              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                         </div>
                         <div className='service-item-2'>
                              <img srcSet={devivery_man} alt="devivery_man" />
                              <h3>FASTEST DELIVERY</h3>
                              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                         </div>
                         <div className='service-item-2'>
                              <img srcSet={pizza} alt="pizza" />
                              <h3>ORIGINAL RECIPES</h3>
                              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                         </div>
                    </div>
               </div>
          </>
     )
}
