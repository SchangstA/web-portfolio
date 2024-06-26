import React, { useEffect, useState } from 'react';
import ShopBag from './tcgSecureImages/BxShoppingBag.svg';
import LoginIcon from './tcgSecureImages/IonPersonSharp.svg';
import ShoppingCart from './tcgSecureImages/BxCart.svg';
import FacebookIcon from './tcgSecureImages/BrandicoFacebookRect.svg';
import GithubIcon from './tcgSecureImages/BrandicoGithub.svg';
import LinkedinIcon from './tcgSecureImages/BrandicoLinkedinRect.svg';
import InstagramIcon from './tcgSecureImages/CibInstagram.svg';

const Login = () => {
  return (
    <div>
    <div class="container">
      <div>
        
    {/* header */}

    <header>
          <nav className="nav-container">
            <a href="/tcgsecure"><h1>SecureTCG</h1></a>
            <ul style={{ display: 'flex', gap: '1rem' }}>
              <a href="/shop">
                <li style={{ textAlign: 'center' }}>
                  <img src={ShopBag} alt="shop" />
                  <span>Shop</span>
                </li>
              </a>
              <a href="/login">
                <li style={{ textAlign: 'center' }}>
                  <img src={LoginIcon} alt="login" />
                  <span>Login</span>
                </li>
              </a>
              <a href="/cart">
                <li style={{ textAlign: 'center' }}>
                  <span id="cart-amount"></span>
                  <img src={ShoppingCart} alt="cart" />
                  <span>Cart</span>
                </li>
              </a>
            </ul>
          </nav>
        </header>
        <div class="background-bar"></div>

    {/* login/signup */}

        <div class="login-container">
          <div class="login-block">
            <form action=''>
                <h1>Login Here</h1>
                <p>Log in to get access to the store.</p>
                <div class="login-user-pass">
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <div style={{ display: 'flex', justifyContent: 'left', paddingInline: '3rem' }}>
                    <label><input type='checkbox' />Remember me</label>
                    </div>
                </div>
                <div style={{ padding: '3rem', display: 'flex', gap: '1rem' }}>
                  <button class="signup-button">Forgot Password?</button>
                  <button type='submit' class="signup-button">Login</button>
              </div>
            </form>
          </div>
    
            <div class="login-block">
                <h1>Sign Up Here</h1>
                <h3>By creating an account with our store, you will be able to:</h3>
                <ul>
                    <li>1. move through the checkout process faster,</li>
                    <li>2. store multiple shipping addresses,</li>
                    <li>3. view and track your orders in your account</li>
                    <li>4. & more.</li>
                </ul>
                <div style={{ padding: '4rem' }}>
                    <button class="signup-button">Create An Account</button>
                </div>
            </div>
        </div>
      </div>
      </div>


    {/* footer */}

    <div id='shop-footer' className="footer-div">
        <div>
        <footer>
          <nav>
            <ul class="footer-grid">
              <h1>How Can We Help</h1>
              <h1>Shop</h1>
              <h1>About</h1>
                <li>Email Us</li>
                <li>Deals of the Week</li>
                <li>About Us</li>
                <li>Leave Us Feedback</li>
                <li>Sell With Us</li>
                <li>Subscribe</li>
                <li>Help Center</li>
                <li>Deck Wishlist</li>
                <li>Careers</li>
                <li>Refund & Return Policy</li>
                <li>One Piece Card Game</li>
                <li>Our Core Values</li>
            </ul>
            <h1 class="connect">Connect With Us</h1>
            <div class="social-icons">
              <a href="https://www.facebook.com/justin.schang.1"><img className='icon-img' src={FacebookIcon} alt="" /></a>
              <a href="https://github.com/SchangstA"><img className='icon-img' src={GithubIcon} alt="" /></a>
              <a href="https://www.linkedin.com/in/justin-schang-02b687291/"><img className='icon-img' src={LinkedinIcon} alt="" /></a>
              <a href="https://www.instagram.com/theschangsta/"><img className='icon-img' src={InstagramIcon} alt="" /></a>
            </div>
          </nav>
        </footer>
      </div>
      </div>
    </div>
  )
}

export default Login
