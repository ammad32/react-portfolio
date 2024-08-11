import React from 'react'

const Service = () => {
  return (
    <>
      <section className="services" id="service">
    <h2 className="section-title">My Services</h2>
    <div className="service-section">
        <div className="services-container"  data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <div className="service-box">
                <i className="fas fa-laptop-code fa-3x"></i>
                <h3>Frontend Development</h3>
                <p>I create visually appealing and responsive front-end designs using modern technologies like HTML,
                    CSS,
                    JavaScript, and React.</p>
            </div>
            <div className="service-box">
                <i className="fas fa-server fa-3x"></i>
                <h3>Backend Development</h3>
                <p>I develop robust backend solutions using Node.js, Express, and MongoDB to ensure your applications
                    run
                    smoothly and efficiently.</p>
            </div>
            <div className="service-box">
                <i className="fas fa-mobile-alt fa-3x"></i>
                <h3>Mobile Optimization</h3>
                <p>Ensuring your website looks great on all devices with responsive design techniques and mobile-first
                    development.</p>
            </div>

        </div>
    </div>
</section>
    </>
  )
}

export default Service
