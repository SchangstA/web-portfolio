import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Contact from '../components/contact'
import Navbar from '../Navbar'
import Github from '../images/CibGithub.svg'
import Linkedin from "../images/CibLinkedin.svg"
import Javascript from "../images/CibJavascript.svg"
import Html from "../images/CibHtml5.svg"
import Css from "../images/CibCss3Shiled.svg"
import ReactIcon from "../images/CibReact.svg"
import MySqlIcon from "../images/DeviconPlainAzuresqldatabase.svg"
import PhpIcon from "../images/MdiLanguagePhp.svg"
import TcgSecureImg from '../images/SecureTcgImage.png'
import TcgSecureShopImg from '../images/TcgSecureShopImage.png'
import TcgSecureCartImg from '../images/TcgSecureCartImage.png'
import EverstrikePage from '../images/everstrikePage.png'
import EverstrikeStory from '../images/everstrikeStory.png'
import EverstrikeLures from '../images/everstrikeLures.png'
import '../components/fadein'

export default function Home() {
  return (
    <>
    <div className="info-container">
      <div style={{justifyContent: 'center', display: 'flex'}}>
        <div style={{position: 'absolute', top: '1rem', display: 'flex'}}>
          <Navbar />
        </div>
      </div>
      <div id="personal-statement">
        <div id="personal-statement-container">
          <h1 className='merriweather-regular'>React Developer</h1>
          <p className='merriweather-regular' style={{fontSize: '1.5rem'}}>
            Hello, my name is Justin Schang. Im a passionate Front-end React devolper with a continued desire to improve my skills.
          </p>
          <div style={{display: 'inline-flex', gap: '8px', paddingTop: '1rem'}}>
            <Link to="https://github.com/SchangstA"><img id='github-icon' src={Github} alt="github" /></Link>
            <Link to="https://www.linkedin.com/in/justin-schang-02b687291/"><img id='linkedin-icon' src={Linkedin} alt="linkedin" /></Link>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div 
          className="self-portrait">
        </div>
      </div> 
      </div>
      <div id='tech-stack'>
        <div id='bubble-container'>
          <h3 className='merriweather-regular'>Tech Stack:</h3>
          <label className='tech-label'><img className="tech-stack-bubble" src={Html} alt="html" /><span className='hidden'>HTML</span></label>
          <label className='tech-label'><img className="tech-stack-bubble" src={Css} alt="css" /><span className='hidden'>CSS</span></label>
          <label className='tech-label'><img className="tech-stack-bubble" src={Javascript} alt="javascript" /><span className='hidden'>Javascript</span></label>
          <label className='tech-label'><img className="tech-stack-bubble" src={ReactIcon} alt="react" /><span className='hidden'>REACT</span></label>
          <label className='tech-label'><img className="tech-stack-bubble" src={MySqlIcon} alt="mysql" /><span className='hidden'>MySQL</span></label>
          <label className='tech-label'><img className="tech-stack-bubble" src={PhpIcon} alt="php" /><span className='hidden'>PHP</span></label>
          
        </div>
      </div>
    </div>
    <div className='projects' id='projects'>
      <div style={{ justifyContent: 'center', marginBottom: '4rem', display: 'flex', gap: '1rem', marginTop: '12rem' }}> {/*-----------------------------*/}
        <h1 style={{ textDecoration: 'underline' }} className='merriweather-regular'>Projects</h1>     
      </div>
      </div>
      <div id='projects-container' style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)' }}>
        <div style={{ display: 'grid', marginInline: 'auto', }}>
          <h1 className='merriweather-regular'>SecureTcg</h1>
          <Link style={{ display: 'flex', marginInline: 'auto' }} to="https://schangsta.github.io/tcgSecure/">
            <div id='secure-tcg-container'>
              <img className='tcg-secure-image1' src={TcgSecureImg} alt="linkedin" />
              <img className='tcg-secure-image2' src={TcgSecureShopImg} alt="linkedin" />
              <img className='tcg-secure-image3' src={TcgSecureCartImg} alt="linkedin" />
            </div>
          </Link>
        </div>
          <div className='project-info-block'>
            <p style={{ marginInline: '2rem', textAlign: 'center' }}>SecureTCG is a multi-page trading card game shop using React, CSS3, and JSON. Created with responsive design in mind utilizing Flexbox and Grid.
             Components that dynamically populate in-stock products, along with a functional "Add to Cart" feature.</p>
          </div>
        <div style={{ display: 'grid', marginInline: 'auto' }}>
          <h1 className='merriweather-regular'>Everstrike Lures</h1>
          <Link onClick={() => window.scrollTo({ top: 0 })} style={{ display: 'flex', marginInline: 'auto' }} to="https://schangsta.github.io/everstike-lures/">
            <div id='secure-tcg-container' style={{ display: 'flex', gap: '1rem', paddingBlock: '2rem' }}>
              <img style={{ maxHeight: '37rem' }} className='tcg-secure-image1' src={EverstrikePage} alt="linkedin" />
              <img style={{ maxHeight: '37rem' }} className='tcg-secure-image2' src={EverstrikeStory} alt="linkedin" />
              <img style={{ maxHeight: '37rem' }} className='tcg-secure-image3' src={EverstrikeLures} alt="linkedin" />
            </div>
          </Link>
        </div>
          <div className='project-info-block'>
            <p style={{ marginInline: '2rem', textAlign: 'center' }}>Everstrike Lures is a single-page webpage with a focus on CSS animations and responsive 	design.
              I chose to showcase my ability to use media queries to create a fully adaptable layout and developed a mobile-friendly hamburger menu for easy navigation.</p>
          </div>
        <div style={{ justifyContent: 'center', marginTop: '4rem', display: 'flex', gap: '1rem' }}>  
      </div>
      <div id='contact' style={{ marginBottom: '1rem' }}>
          <Contact />
      </div>
      </div>
    </>
  )
}
