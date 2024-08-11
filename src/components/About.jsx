import React from 'react'
import AOS from 'aos'
import tt from '../assets/tt.png'
import profilebg from '../assets/profile-bg.jpg';

const About = () => {
  return (
    <>
      <section id="About">
    <h1 className="about">About Us</h1>
    <div className="about-us" >
        <div className="max-w-2xl mx-1 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-2 bg-white shadow-xl text-gray-900 profile" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <div className="h-32 overflow-hidden">
                <img className="object-cover object-top w-full"
                    src={profilebg}
                    alt='Mountain'/>
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img className="object-cover object-center h-32" src={tt} alt='image'/>
            </div>
            <div className="text-center mt-2">
                <h2 className="font-semibold">Muhammad Ammad</h2>
                <p className="text-gray-500">Frontend & Backend Developer</p>
            </div>
            <div className="social-links">
                <a href="https://github.com/ammad32" className="github" target="_blank" title="GitHub">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/ammadm/" className="linkedin" target="_blank" title="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="twitter" target="_blank" title="Twitter">
                    <i className="fab fa-twitter"></i>
                </a>
            </div>
            <div className="p-4 border-t mx-8 mt-2">
                <button className="w-full block mx-auto work-button">let's work Together</button>
            </div>
        </div>
       <div className="description" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <h1>Front End & Back End Developer</h1>
            <p>As a dedicated front-end developer, I specialize in crafting seamless and visually appealing user
                experiences. With a passion for clean code and innovative design, I bring a unique blend of creativity and technical expertise to every project. <br></br><br></br><br></br>
                As a front-end developer, I specialize in creating engaging
                and user-friendly interfaces for websites. Proficient in HTML, CSS, and JavaScript, I focus on
                translating design concepts into visually appealing and responsive web pages. My passion lies in
                crafting seamless user experiences that captivate and retain visitors. On the other hand, my expertise
                as a back-end developer centers around the server-side aspects of web development. Working with
                databases, server scripting languages, and frameworks. With a balance of front-end creativity and
                back-end technical proficiency, I bring a comprehensive skill set to the table for creating dynamic and
                effective online experiences.</p>
       </div>
    </div>

</section>
    </>
  )
}

export default About
