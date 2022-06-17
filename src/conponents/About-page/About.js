import React from 'react'
import rest from '../img/restaurant.jpg';

export const About = () => {
     return (
          <>
               <div className='contact-detail'>

                    <div className='contact'>
                         <div className='c-num'>
                              <i className="fa-solid fa-phone"></i>
                              <div>
                                   <h4>+91 8578149530</h4>
                                   <p>A small river named Duden flows</p>
                              </div>
                         </div>
                         <div className='c-addr'>
                              <i className="fa-solid fa-location-crosshairs"></i>
                              <div>
                                   <h4>198 West 21th Street</h4>
                                   <p>Suite 721 New York NY 10016</p>
                              </div>
                         </div>
                         <div className='c-time'>
                              <i className="fa-solid fa-clock"></i>
                              <div>
                                   <h4>Open Monday-Friday</h4>
                                   <p>8:00am - 9:00pm</p>
                              </div>

                         </div>
                    </div>
                    <div className='soc'>
                         <i className="fa-brands fa-twitter"></i>
                         <i className="fa-brands fa-facebook"></i>
                         <i className="fa-brands fa-instagram-square"></i>
                    </div>
               </div>


               <div className='welcome-container'>
                    <div className='wel-item-1'>
                         <img srcSet={rest} alt='rest-img' />
                    </div>
                    <div className='wel-item-2'>
                         <div>
                              <h1>WELCOME TO <span> PIZZA </span>A RESTAURANT</h1>
                              <p>
                                   On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
                              </p>
                         </div>

                    </div>
               </div>
          </>
     )
}
