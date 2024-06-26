import React, { useEffect, useState } from 'react';
import CardData from './cards.json';
import './style.css';
import ShopBag from './tcgSecureImages/BxShoppingBag.svg';
import Login from './tcgSecureImages/IonPersonSharp.svg';
import Cart from './tcgSecureImages/BxCart.svg';
import FacebookIcon from './tcgSecureImages/BrandicoFacebookRect.svg'
import GithubIcon from './tcgSecureImages/BrandicoGithub.svg'
import LinkedinIcon from './tcgSecureImages/BrandicoLinkedinRect.svg'
import InstagramIcon from './tcgSecureImages/CibInstagram.svg'

const Shop = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Set cards state with CardData when the component mounts
    setCards(CardData);
  }, []);

  const addToCart = (index) => {
    const card = cards[index];
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cardInfo = {
      id: card.id,
    };
  
    // Add the new card to the existing cart items
    existingCartItems.push(cardInfo);
  
    // Store the updated cart items back into localStorage
    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
    
    const addToCartButton = document.getElementById(`add-to-cart-button-${index}`);
    addToCartButton.classList.add('added');

    setTimeout(function () {
      addToCartButton.classList.remove('added');
    }, 3000);
  };

  return (
    <div>
      {/* header */}
      <div className="container">
        <header>
          <nav className="nav-container">
            <a href="/tcgsecure"><h2>SecureTCG</h2></a>
            <ul style={{ display: 'flex', gap: '1rem' }}>
              <a href="/shop">
                <li style={{ textAlign: 'center' }}>
                  <img src={ShopBag} alt="shop" />
                  <span>Shop</span>
                </li>
              </a>
              <a href="/login">
                <li style={{ textAlign: 'center' }}>
                  <img src={Login} alt="login" />
                  <span>Login</span>
                </li>
              </a>
              <a href="/cart">
                <li style={{ textAlign: 'center' }}>
                  <span id="cart-amount"></span>
                  <img src={Cart} alt="cart" />
                  <span>Cart</span>
                </li>
              </a>
            </ul>
          </nav>
        </header>
        <div className="background-bar"></div>
      </div>

      {/* shop catalog */}
      <div style={{ padding: '0 5rem 0 0' }}>
        <div>
          <div className="shop-block" style={{ paddingInline: '1rem' }}>
            <div className="shop-list" id="parent-element">
              {/* Render cards */}
              {cards.map((card, index) => (
                <div className="child" key={index}>
                  <img className="image-item" id={`card-image-${index}`} src={card.Img} alt="" />
                  <div className="card-info" id={`card-info-${index}`}>
                    <h2 id={`card-name-${index}`}>{card.Name}</h2>
                    <span id={`card-game-${index}`}>{card.Game}</span> <br />
                    <span id={`card-set-${index}`}>{card.Set}</span> <br />
                    <span id={`card-details-${index}`}>{card.Details}</span> <br />
                    <span id={`card-price-${index}`} style={{ color: 'gray' }}>As low as: </span>
                    <span id={`card-price-value-${index}`} style={{ color: 'royalblue' }}>${card.Price.toFixed(2)}</span> <br />
                    <button className="add-to-cart-button" id={`add-to-cart-button-${index}`} onClick={() => addToCart(index)}>
                      <svg className="add-to-cart-box box-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="2" fill="#ffffff"/></svg>
                      <svg className="add-to-cart-box box-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="2" fill="#ffffff"/></svg>
                      <svg className="cart-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                      <svg className="tick" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path fill="#ffffff" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"/></svg>
                      <span className="add-to-cart">Add to cart</span>
                      <span className="added-to-cart">Added to cart</span>
                    </button>
                  </div>
                </div>
              ))}
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
  );
}

export default Shop;
