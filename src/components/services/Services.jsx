import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3> Web Development</h3>

          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Full-Stack Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> E-commerce Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Content Management System (CMS)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Web Application Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Custom Web Solution </p>
            </li>
           
          </ul>

        </article>


        <article className='service'>
          <div className='service__head'>
            <h3>Financial Trading</h3>

          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Stock Trading</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Forex (Foreign Exchange) Trading</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Cryptocurrency Trading</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Social Trading</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Market Research and Analysis</p>
            </li>
           
          </ul>

        </article>


        <article className='service'>
          <div className='service__head'>
            <h3> Real Estate</h3>

          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Property Sales</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Buyer Representation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Real Estate Investment Consultancy</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Real Estate Marketing and Advertising</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Real Estate Auctions</p>
            </li>
           
          </ul>

        </article>

      </div>
    </section> 

  )
}

export default Services
