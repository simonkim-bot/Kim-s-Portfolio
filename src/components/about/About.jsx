import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'



const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image"/>
          <img src={ME} alt="about image"/>

        </div>
        <div className="about__content">
        <div className='about__cards'>

          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>5+ Years Work</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>100+ Worldwide</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>45+ completed</small>
          </article>
        </div>

        <p>
        My story begins with my family and upbringing, the nurturing ground where the seeds of my identity were sown. My parents, with their love and guidance, instilled in me the importance of compassion, perseverance, and empathy. They provided me with a stable foundation that allowed me to dream big and embrace the diverse opportunities life presented.
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>

      </div>
      </div>
    
    </section> 
 )
}

export default About
