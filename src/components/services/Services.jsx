import React from 'react'
import './Services.css';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>
          <ul className='service__list'></ul>
        </article>
      </div>
    </section>
  )
}

export default Services