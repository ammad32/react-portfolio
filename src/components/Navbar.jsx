import React from 'react'
import  { useEffect } from 'react';
import $ from 'jquery';


const Navbar = () => {
    useEffect(() => {
    const header = document.querySelector('.start-style');

    const handleScroll = () => {
      if (window.scrollY >= 10) {
        header.classList.remove('start-style');
        header.classList.add('scroll-on');
      } else {
        header.classList.remove('scroll-on');
        header.classList.add('start-style');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <div className="navigation-wrap bg-light start-header start-style">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-md navbar-light">
    
                        <a className="navbar-brand" href="#"><span>Muhammad Ammad</span></a>
    
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
    
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto py-4 py-md-0">
                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                                    <a className="nav-link" href="#" role="button" aria-haspopup="true"
                                        aria-expanded="false">Home</a>
                                </li>
                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                    <a className="nav-link" href="#About">About</a>
                                </li>
                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                    <a className="nav-link" href="#service">Services</a>
                                </li>
                                 {/* <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                    <a className="nav-link" href="./Pages/resume.html">Resume</a>
                                </li> */}
                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                    <a className="nav-link" href="./assest/Final Ammad's Resume.pdf" download target="_blank">Download CV  <i className="fas fa-download "></i></a>
                                </li>
                            </ul>
                        </div>
    
                    </nav>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Navbar
