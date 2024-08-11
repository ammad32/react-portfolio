import React, { useEffect, useState } from 'react';
import image1 from '../assets/image1.png';
import AOS from 'aos';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const fullText = " Frontend & Backend Developer";
  const textColor = "rgba(129,103,169,.6)"; 
  const fontWeight = "600";

  useEffect(() => {
    if (index < fullText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prevText) => prevText + fullText.charAt(index));
        setIndex(index + 1);
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [index, fullText]);

  return (
    <>
      <section className="hero">
        <div className="hero-content" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <h1>I'm Muhammad <span>Ammad</span></h1>
          <p id="animated-text">A Passionate  
             { displayedText.split('').map((char, idx) => (
              <span key={idx} style={{ color: textColor, fontWeight: fontWeight }}>
                {char}
              </span>
            ))}
          </p>
          <button className="cssbuttons-io">
            <span>About me</span>
          </button>
        </div>
        <div className="hero-image" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <img src={image1} alt="Profile image" />
        </div>
      </section>
    </>
  );
};

export default Hero;
