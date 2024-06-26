import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import Github from '../images/CibGithub.svg'
import Linkedin from "../images/CibLinkedin.svg"
import Javascript from "../images/CibJavascript.svg"
import Html from "../images/CibHtml5.svg"
import Css from "../images/CibCss3Shiled.svg"
import ReactIcon from "../images/CibReact.svg"
import MySqlIcon from "../images/DeviconPlainAzuresqldatabase.svg"
import Ruby from "../images/CibRuby.svg"
import PointDown from "../images/LaHandPointer.svg"
import TcgSecureImg from '../images/SecureTcgImage.png'
import TcgSecureShopImg from '../images/TcgSecureShopImage.png'
import TcgSecureCartImg from '../images/TcgSecureCartImage.png'

export default function Home() {
  return (
    <>
    <Navbar />
    <div
      style={{
      marginInline: 'auto',
      marginTop: '2rem', 
      border: '2px solid royalblue', 
      width: '90%',
      paddingRight: '30rem'
      }} 
    />
    <div className="info-container">
      <div id="personal-statement">
        <div id="personal-statement-container">
          <h1>React Developer</h1>
          <p style={{fontSize: '1.5rem'}}>
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
          <h3>Tech Stack:</h3>
          <img className="tech-stack-bubble" src={Html} alt="html" />
          <img className="tech-stack-bubble" src={Css} alt="css" />
          <img className="tech-stack-bubble" src={Javascript} alt="javascript" />
          <img className="tech-stack-bubble" src={ReactIcon} alt="react" />
          <img className="tech-stack-bubble" src={MySqlIcon} alt="mysql" />
          <img className="tech-stack-bubble" src={Ruby} alt="ruby on rails" />
        </div>
      </div>
    </div>
    <div className='projects'>
      <div style={{ justifyContent: 'center', marginBlock: '4rem', display: 'flex', gap: '1rem' }}>
        <h1>Projects</h1>     
      </div>
      </div>
      <div id='projects-container' style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)' }}>
        <div style={{ display: 'grid', marginInline: 'auto' }}>
          <h1>SecureTcg</h1>
          <Link onClick={() => window.scrollTo({ top: 0 })} style={{ display: 'flex', marginInline: 'auto' }} to="/tcgsecure">
            <div id='secure-tcg-container' style={{ display: 'flex', gap: '1rem', paddingBlock: '2rem' }}>
              <img id='tcg-secure-image1' src={TcgSecureImg} alt="linkedin" />
              <img id='tcg-secure-image2' src={TcgSecureShopImg} alt="linkedin" />
              <img id='tcg-secure-image3' src={TcgSecureCartImg} alt="linkedin" />
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
