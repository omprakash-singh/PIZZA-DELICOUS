import React from 'react'
import { Footer } from '../Footer/Footer'
import { Link } from 'react-router-dom';
import pic from '../img/pic.jpg';
import bg_1 from '../img/bg_1.png';

export const BlogPage = () => {
     return (
          <>
               <div className='blog-home-conatiner'>
                    <div className='bog-home'>
                         <h1>Read Our Blog</h1>
                         <Link className='blog-home-link' to='/'>Home</Link>
                         Blog
                    </div>
               </div>


               <div className='blog-page-container'>
                    <div className='last-task'>
                         <div className='blog-page-item'>
                              <h1>10 Tips For The Traveler</h1>
                              <p>
                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.
                              </p>
                              <img srcSet={pic} alt='pic' />
                              <p>
                                   Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!
                              </p>
                              <h1>#2. Creative WordPress Themes</h1>
                              <p>
                                   Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.
                              </p>
                              <img srcSet={bg_1} alt='bg_1' />

                              <p>
                                   Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.
                              </p>
                              <p>
                                   Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.
                              </p>
                              <p>
                                   Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!
                              </p>

                              <p>
                                   Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?
                              </p>

                         </div>

                    </div>
                    <div className='blog-page-btn'>
                         <Link className='blog-page-link-btn' to='/blog-page'>Life</Link>
                         <Link className='blog-page-link-btn' to='/blog-page'>Sport</Link>
                         <Link className='blog-page-link-btn' to='/blog-page'>Tech</Link>
                         <Link className='blog-page-link-btn' to='/blog-page'>Travel</Link>
                    </div>
               </div>


               <Footer />
          </>
     )
}
