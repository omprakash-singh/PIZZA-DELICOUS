import React from 'react'
import '../../App.css'
import bg_1 from '../img/bg_1.png';
import drink from '../img/drink.png';
import burger from '../img/burger.png';
import pasta from '../img/pasta.png';

export const Menu = () => {
     return (
          <>
               <div className='hot-pizza-meals'>
                    <div>
                         <h1>HOT PIZZA MEALS</h1>
                         <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
               </div>

               <div className='hot-pizza-meals-menu'>
                    <div className='menu-row-1'>
                         <div className='menu-item float-right'>
                              <img srcSet={bg_1} alt="menu" />
                              <h2>Italian Pizza</h2>
                              <p>Far far away, behind the word mountains, far from <br />  the countries Vokalia and Consonantia</p>
                              <button className='price-btn'>$2.90</button>
                              <button className='order-btn-2'>Order</button>
                         </div>
                         <div className='menu-item float-right'>
                              <img srcSet={bg_1} alt="menu" />
                              <h2>Greek Pizza</h2>
                              <p>Far far away, behind the word mountains, far from <br />  the countries Vokalia and Consonantia</p>
                              <button className='price-btn'>$2.90</button>
                              <button className='order-btn-2'>Order</button>
                         </div>
                         <div className='menu-item float-right'>
                              <img srcSet={bg_1} alt="menu" />
                              <h2>Caucasian Pizza</h2>
                              <p>Far far away, behind the word mountains,far from <br />  the countries Vokalia and Consonantia</p>
                              <button className='price-btn'>$2.90</button>
                              <button className='order-btn-2'>Order</button>
                         </div>
                    </div>
                    <div className='menu-row-2'>
                         <div className='menu-item float-left'>
                              <img srcSet={bg_1} alt="menu" />
                              <h2>American Pizza</h2>
                              <p>Far far away, behind the word mountains,  far from <br /> the countries Vokalia and Consonantia</p>
                              <button className='price-btn'>$2.90</button>
                              <button className='order-btn-2'>Order</button>
                         </div>
                         <div className='menu-item float-left'>
                              <img srcSet={bg_1} alt="menu" />
                              <h2>Tomatoe Pie</h2>
                              <p>Far far away, behind the word mountains, far from the <br /> countries Vokalia and Consonantia</p>
                              <button className='price-btn'>$2.90</button>
                              <button className='order-btn-2'>Order</button>
                         </div>
                         <div className='menu-item float-left'>
                              <img srcSet={bg_1} alt="menu" />
                              <h2>Margherita</h2>
                              <p>Far far away, behind the word mountains,far from the <br />  countries Vokalia and Consonantia</p>
                              <button className='price-btn'>$2.90</button>
                              <button className='order-btn-2'>Order</button>
                         </div>
                    </div>
               </div>

               <div className='menu-price'>
                    <div className='menu-prince-headline'>

                         <h1>OUR MENU PRICING</h1>
                         <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div className='menu-price-item float-left'>
                         <div className='menu-price-1'>
                              <div>
                                   <img srcSet={bg_1} alt="menu-item" />
                                   <h2>Italian Pizza....................... <span>$20.00</span></h2>
                                   <p>A small river named Duden flows by their place and supplies</p>
                              </div>
                              <div>
                                   <img srcSet={bg_1} alt="menu-item" />
                                   <h2>Hawaiian Pizza....................... <span>$20.00</span></h2>
                                   <p>A small river named Duden flows by their place and supplies</p>
                              </div>
                              <div>
                                   <img srcSet={bg_1} alt="menu-item" />
                                   <h2>Greek Pizza....................... <span>$20.00</span></h2>
                                   <p>A small river named Duden flows by their place and supplies</p>
                              </div>
                              <div>
                                   <img srcSet={bg_1} alt="menu-item" />
                                   <h2>Bacon Crispy Thins....................... <span>$20.00</span></h2>
                                   <p>A small river named Duden flows by their place and supplies</p>
                              </div>
                         </div>
                         <div className='menu-price-2'>
                              <div>
                                   <img srcSet={bg_1} alt="menu-item" />
                                   <h2>Hawaiian Special....................... <span>$20.00</span></h2>
                                   <p>A small river named Duden flows by their place and supplies</p>
                              </div>
                              <div>
                                   <img srcSet={bg_1} alt="menu-item" />
                                   <h2>Ultimate Overload....................... <span>$20.00</span></h2>
                                   <p>A small river named Duden flows by their place and supplies</p>
                              </div>
                              <div>
                                   <img srcSet={bg_1} alt="menu-item" />
                                   <h2>Bacon Pizza....................... <span>$20.00</span></h2>
                                   <p>A small river named Duden flows by their place and supplies</p>
                              </div>
                              <div>
                                   <img srcSet={bg_1} alt="menu-item" />
                                   <h2>Ham & Pineapple....................... <span>$20.00</span></h2>
                                   <p>A small river named Duden flows by their place and supplies</p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className='res-menu-items'>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                         <div className="carousel-inner">
                              <div className="carousel-item active">
                                   <h1>PIZZA</h1>
                                   <div className='res-menu-item-1 res-menu'>
                                        <div className='res-menu-pizza'>
                                             <img srcSet={bg_1} alt="menu" />
                                             <h2>Margherita</h2>
                                             <p>Far far away, behind the word mountains,far from the <br />  countries Vokalia and Consonantia</p>
                                             <button className='price-btn'>$2.90</button>
                                             <button className='order-btn-2'>Order</button>
                                        </div>
                                        <div className='res-menu-pizza'>
                                             <img srcSet={bg_1} alt="menu" />
                                             <h2>Margherita</h2>
                                             <p>Far far away, behind the word mountains,far from the <br />  countries Vokalia and Consonantia</p>
                                             <button className='price-btn'>$2.90</button>
                                             <button className='order-btn-2'>Order</button>
                                        </div>
                                        <div className='res-menu-pizza'>
                                             <img srcSet={bg_1} alt="menu" />
                                             <h2>Margherita</h2>
                                             <p>Far far away, behind the word mountains,far from the <br />  countries Vokalia and Consonantia</p>
                                             <button className='price-btn'>$2.90</button>
                                             <button className='order-btn-2'>Order</button>
                                        </div>
                                   </div>
                              </div>
                              <div className="carousel-item">
                                   <h1>DRINK</h1>
                                   <div className='res-menu-item-1 res-menu'>
                                        <div className='res-menu-drink'>
                                             <img srcSet={drink} alt="menu" />
                                             <button className='price-btn'>$2.90</button>
                                             <button className='order-btn-2'>Order</button>
                                        </div>
                                        <div className='res-menu-drink'>
                                             <img srcSet={drink} alt="menu" />
                                             <button className='price-btn'>$2.90</button>
                                             <button className='order-btn-2'>Order</button>
                                        </div>
                                        <div className='res-menu-drink'>
                                             <img srcSet={drink} alt="menu" />
                                             <button className='price-btn'>$2.90</button>
                                             <button className='order-btn-2'>Order</button>
                                        </div>
                                   </div>
                              </div>
                              <div className="carousel-item">
                                   <h1>BURGER</h1>
                                   <div className='res-menu-item-1 res-menu'>
                                        <div className='res-menu-burger'>
                                             <img srcSet={burger} alt="menu" />
                                             <h2>Margherita</h2>
                                             <p>Far far away, behind the word mountains,far from the <br />  countries Vokalia and Consonantia</p>
                                             <button className='price-btn'>$2.90</button>
                                             <button className='order-btn-2'>Order</button>
                                        </div>
                                        <div className='res-menu-burger'>
                                             <img srcSet={burger} alt="menu" />
                                             <h2>Margherita</h2>
                                             <p>Far far away, behind the word mountains,far from the <br />  countries Vokalia and Consonantia</p>
                                             <button className='price-btn'>$2.90</button>
                                             <button className='order-btn-2'>Order</button>
                                        </div>
                                        <div className='res-menu-burger'>
                                             <img srcSet={burger} alt="menu" />
                                             <h2>Margherita</h2>
                                             <p>Far far away, behind the word mountains,far from the <br />  countries Vokalia and Consonantia</p>
                                             <button className='price-btn'>$2.90</button>
                                             <button className='order-btn-2'>Order</button>
                                        </div>
                                   </div>
                              </div>
                              <div className="carousel-item">
                                   <h1>PASTA</h1>
                                   <div className='res-menu-item-1 res-menu'>
                                        <div className='res-menu-burger'>
                                             <img srcSet={pasta} alt="menu" />
                                             <h2>Margherita</h2>
                                             <p>Far far away, behind the word mountains,far from the <br />  countries Vokalia and Consonantia</p>
                                             <button className='price-btn'>$2.90</button>
                                             <button className='order-btn-2'>Order</button>
                                        </div>
                                        <div className='res-menu-burger'>
                                             <img srcSet={pasta} alt="menu" />
                                             <h2>Margherita</h2>
                                             <p>Far far away, behind the word mountains,far from the <br />  countries Vokalia and Consonantia</p>
                                             <button className='price-btn'>$2.90</button>
                                             <button className='order-btn-2'>Order</button>
                                        </div>
                                        <div className='res-menu-burger'>
                                             <img srcSet={pasta} alt="menu" />
                                             <h2>Margherita</h2>
                                             <p>Far far away, behind the word mountains,far from the <br />  countries Vokalia and Consonantia</p>
                                             <button className='price-btn'>$2.90</button>
                                             <button className='order-btn-2'>Order</button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Previous</span>
                         </button>
                         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Next</span>
                         </button>
                    </div>
               </div>
          </>
     )
}
