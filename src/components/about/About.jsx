import React from 'react'
import './About.css';
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineProject} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5 className='adjust'>Get To Know</h5>
      <h2 className='adjust'>About Me</h2>
      
      <div className="container about__container">
        
        <div className="about__me">

          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>
        
        <div className="about__content">

          <div className="about__cards">

            <article className='about__card'>

              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>

            </article>

            <article className='about__card'>

              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>5+ Worldwide</small>

            </article>

            <article className='about__card'>

              <AiOutlineProject className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Completed</small>

            </article>

            <p id='scrollBar'>
            With almost two years of experience as an RF Engineer in the Telecom Domain, I have developed a keen understanding of the unique data challenges faced by this industry. I have experience working with large datasets and using data analysis tools to find insights that drive business decisions. This has extended my passion to become proficient in data visualization, SQL, and Python. I am driven to deliver effective solutions to complex data problems. I retain a strong desire to learn and develop my skills in data engineering to manage data-driven projects and apply machine learning strategies to my profession. I am a self-driven individual with an enthusiasm to learn and expand in this ever-evolving field. My attention to detail, problem-solving skills, and ability to work collaboratively make me an asset to any team. I am excited to contribute my skills and creativity to a dynamic organization that values innovation and continuous learning. Also, I possess sound knowledge of HTML, CSS, Javascript, and ReactJs, I am passionate about designing and developing intuitive and dynamic web applications.
            </p>

            <a href='#contact' className='btn btn-primary' id='compoSpecific'>Let's Talk</a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About