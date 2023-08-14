import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div classname='portfolio__item-image'>
            <img src={IMG1} alt=""/>
          </div>
          <h3> CodeGirl</h3>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://github.com' className='btn' target='_blank'>Visit Us</a>

        </article>
        <article className='portfolio__item'>
          <div classname='portfolio__item-image'>
            <img src={IMG2} alt=""/>
          </div>
          <h3> Antoh Real Estate</h3>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://github.com' className='btn' target='_blank'>Visit Us</a>

        </article>
        <article className='portfolio__item'>
          <div classname='portfolio__item-image'>
            <img src={IMG3} alt=""/>
          </div>
          <h3> Kim Tech Security</h3>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://github.com' className='btn' target='_blank'>Visit Us</a>

        </article>

        <article className='portfolio__item'>
          <div classname='portfolio__item-image'>
            <img src={IMG4} alt=""/>
          </div>
          <h3> Antoh Capital</h3>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://github.com' className='btn' target='_blank'>Visit Us</a>

        </article>

        <article className='portfolio__item'>
          <div classname='portfolio__item-image'>
            <img src={IMG5} alt=""/>
          </div>
          <h3> Blackout Studios</h3>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://github.com' className='btn' target='_blank'>Visit Us</a>

        </article>

        <article className='portfolio__item'>
          <div classname='portfolio__item-image'>
            <img src={IMG6} alt=""/>
          </div>
          <h3> Atom Cuisine</h3>
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://github.com' className='btn' target='_blank'>Visit Us</a>

        </article>






      </div>
    </section> 
  )
}

export default Portfolio