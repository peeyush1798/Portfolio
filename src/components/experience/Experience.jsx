import React from 'react'
import './Experience.css';
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

                            {/* START OF FRONTEND */}
        <div className="experience__frontend">
          <h2 id='Skills'>Skills and Tools</h2>
          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill / >
              <h4>HTML</h4>
              <small className='text-light1'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill / >
              <h4>CSS</h4>
              <small className='text-light1'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill / >
              <h4>JavaScript</h4>
              <small className='text-light1'>Intermediate</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill / >
              <h4>Bootstrap</h4>
              <small className='text-light1'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill / >
              <h4>ReactJS</h4>
              <small className='text-light1'>Intermediate</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill / >
              <h4>Python</h4>
              <small className='text-light1'>Intermediate</small>
            </article>

            
            <article className='experience__details'>
              <BsPatchCheckFill / >
              <h4>Database Management Systems</h4>
              <small className='text-light1'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill / >
              <h4>MySQL</h4>
              <small className='text-light1'>Experienced</small>
            </article>

            
            <article className='experience__details'>
              <BsPatchCheckFill / >
              <h4>PowerBI</h4>
              <small className='text-light1'>Intermediate</small>
            </article>

            
            <article className='experience__details'>
              <BsPatchCheckFill / >
              <h4>ExpressJS and MongoDB</h4>
              <small className='text-light1'>Beginner</small>
            </article>

            
            <article className='experience__details'>
              <BsPatchCheckFill / >
              <h4>NodeJS</h4>
              <small className='text-light1'>Beginner</small>
            </article>

          </div>

        </div>

        {/* START OF BACKEND */} 

        {/* <div className="experience__backend"> */}
        {/* <h3 id='Skills'>Skills and Tools</h3> */}
          {/* <div className="experience__content">

        
            </div> */}

        {/* </div> */}

        {/* {/* END OF BAKCEND */}

      </div>
    </section>
  )
}

export default Experience