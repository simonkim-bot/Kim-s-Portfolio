import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.JPG'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.JPG'

// import Swiper core and required modules
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Enos Jeron',
    review: 'Working with Kim Ki-Dong was an absolute pleasure! They brought our vision to life with an incredible website that exceeded our expectations. Their attention to detail, technical expertise, and creative problem-solving made the entire process seamless. We highly recommend Kim Ki-Dong to anyone looking for a top-notch web developer.'
  },

  {
    avatar: AVTR2,
    name: 'Daniel Nartey',
    review: 'I was blown away by the level of expertise and dedication Simon Antoh brought to our project. They listened carefully to our requirements and translated them into a sleek and modern website. Their ability to adapt and implement changes quickly was impressive. We are thrilled with the final product and look forward to continuing our collaboration with Simon Antoh.'
  },

  {
    avatar: AVTR3,
    name: 'Philip Arthur',
    review: '"From start to finish, Kim demonstrated professionalism and a deep understanding of web development. They took the time to understand our business and goals, which translated into a website that perfectly reflects our brand identity. Kim was always available to answer our questions and made the entire process stress-free. Highly recommended!'
  },

  {
    avatar: AVTR4,
    name: 'Fautina Duku',
    review: 'When we decided to revamp our website, we knew we needed a web developer who could handle the complexity of our e-commerce platform. Simon Antoh rose to the challenge and delivered a visually stunning, user-friendly website that significantly improved our online sales. Their professionalism and commitment to excellence are second to none'
  },
]
const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
     >
        {
          data.map(({avatar, name, review}, index) =>{
            return(
              <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar}/>
              </div>

              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}
              </small>

              </SwiperSlide>
            )
          })
        }
        

      </Swiper>
    </section> 

  )
}

export default Testimonial
