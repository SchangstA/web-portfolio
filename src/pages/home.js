import React from 'react'
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
import BurgerBarnFullPage from '../images/burgerBarnFullPage.png'
import BurgerBarnReducedPage from '../images/burgerBarnReducedPage.png'
import BurgerBarnMobilePage from '../images/burgerBarnMobilePage.png'
import EverstrikePage from '../images/everstrikePage.png'
import EverstrikeStory from '../images/everstrikeStory.png'
import EverstrikeLures from '../images/everstrikeLures.png'
import '../components/fadein'

export default function Home() {
  return (
    <>
    <div className="info-container">
      <div style={{justifyContent: 'center', display: 'flex'}}>
        <div style={{position: 'absolute', top: '1rem'}}>
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
      <div className="tech-stack" style={{ textAlign: 'center' }}>
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '1rem', 
          paddingTop: '8rem'
          }}>
          <h3 className='merriweather-regular'>Tech Stack:</h3>
          <img className="tech-stack-bubble" src={Html} alt="html" />
          <img className="tech-stack-bubble" src={Css} alt="css" />
          <img className="tech-stack-bubble" src={Javascript} alt="javascript" />
          <img className="tech-stack-bubble" src={ReactIcon} alt="react" />
          <img className="tech-stack-bubble" src={MySqlIcon} alt="mysql" />
          <img className="tech-stack-bubble" src={PhpIcon} alt="php" />
        </div>
      </div>
    </div>
    <div className='projects'>
      <div style={{ justifyContent: 'center', marginBlock: '4rem', display: 'flex', gap: '1rem', marginTop: '10rem' }}>
        <h1 className='merriweather-regular'>Projects</h1>     
      </div>
      </div>
      <div id='projects-container' style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)' }}>
        <div style={{ display: 'grid', marginInline: 'auto' }}>
          <h1 className='merriweather-regular'>SecureTcg</h1>
          <Link onClick={() => window.scrollTo({ top: 0 })} style={{ display: 'flex', marginInline: 'auto' }} to="https://schangsta.github.io/tcgSecure/">
            <div id='secure-tcg-container' style={{ display: 'flex', gap: '1rem', paddingBlock: '2rem' }}>
              <img className='tcg-secure-image1' src={TcgSecureImg} alt="linkedin" />
              <img className='tcg-secure-image2' src={TcgSecureShopImg} alt="linkedin" />
              <img className='tcg-secure-image3' src={TcgSecureCartImg} alt="linkedin" />
            </div>
          </Link>
        </div>
        <div style={{ display: 'grid', marginInline: 'auto' }}>
          <h1 className='merriweather-regular'>Burger Barn</h1>
          <Link onClick={() => window.scrollTo({ top: 0 })} style={{ display: 'flex', marginInline: 'auto' }} to="https://schangsta.github.io/burger-barn-landing-page/">
            <div id='secure-tcg-container' style={{ display: 'flex', gap: '1rem', paddingBlock: '2rem' }}>
              <img style={{ maxHeight: '37rem' }} className='tcg-secure-image1' src={BurgerBarnFullPage} alt="linkedin" />
              <img style={{ maxHeight: '37rem' }} className='tcg-secure-image2' src={BurgerBarnReducedPage} alt="linkedin" />
              <img style={{ maxHeight: '37rem' }} className='tcg-secure-image3' src={BurgerBarnMobilePage} alt="linkedin" />
            </div>
          </Link>
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
        <div style={{ justifyContent: 'center', marginTop: '4rem', display: 'flex', gap: '1rem' }}>  
      </div>
      <div>
          <Contact />
      </div>
      </div>
    </>
  )
}
