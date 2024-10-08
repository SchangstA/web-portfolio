import React, { useEffect, useState } from 'react';
import CardData from './cards.json';
import ShopBag from './tcgSecureImages/BxShoppingBag.svg';
import Login from './tcgSecureImages/IonPersonSharp.svg';
import ShoppingCart from './tcgSecureImages/BxCart.svg';
import FacebookIcon from './tcgSecureImages/BrandicoFacebookRect.svg';
import GithubIcon from './tcgSecureImages/BrandicoGithub.svg';
import LinkedinIcon from './tcgSecureImages/BrandicoLinkedinRect.svg';
import InstagramIcon from './tcgSecureImages/CibInstagram.svg';
import Trashcan from './tcgSecureImages/IonTrashOutline.svg'

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const total = cartItems.reduce((acc, item) => acc + item.Price, 0);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    if (storedCartItems.length > 0) {
      const cardsInCart = storedCartItems.map(item => {
        const card = CardData.find(card => card.id === item.id);
        return card ? { ...card, quantity: item.quantity } : null;
      }).filter(Boolean);
      setCartItems(cardsInCart);
    }
  }, []);

  useEffect(() => {
    setTotalPrice(total.toFixed(2));
  }, [cartItems]);

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
    setTotalPrice(total.toFixed(2));
  };
  // remove each cart item by id from local storage
  const removeItem = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    setTotalPrice(total.toFixed(2));
  }

  const hideButton = () => {
    if(totalPrice > 0) {
      const clearBtn = document.getElementById('clear-cart-btn')
      clearBtn.classList.remove('visually-hidden')
    }
  }
  hideButton()
  
  return (
    <>
      <div className="container">
        {/* header */}
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
                  <span id="cart-amount">{cartItems.length}</span>
                  <img src={ShoppingCart} alt="cart" />
                  <span>Cart</span>
                </li>
              </a>
            </ul>
          </nav>
        </header>
        <div className="background-bar"></div>

        {/* cart */}
        <div className="cart-container">
          <div className="cart-block">
            <div style={{ display: 'grid' }} id="cart-items">
              {cartItems.map((item, index) => (
                <div id='cart-item' key={index}>
                  <img style={{ borderRadius: '4px', minWidth: '6rem', width: '6rem' }} src={item.Img} alt={item.Name} />
                  <p>{item.Name}</p>
                  <p>{item.Set}</p>
                  <p>{item.Details}</p>
                  <p>{item.Price}</p>
                  <button onClick={() => removeItem(item.id)} style={{ border: 'none', background: '#ff4400a8', width: '2.8rem', height: '2.8rem', borderRadius: '50%' }}>
                      <img id='remove-item-btn' style={{ size: '100%' }} src={Trashcan} alt='remove-item-btn' />
                  </button>
                </div>
              ))}
            </div>
            <div style={{ padding: '2rem', display: 'flex', gap: '1rem', justifyContent: 'right' }}>
              <button id='clear-cart-btn' style={{ paddingInline: '3rem' }} onClick={clearCart}>Clear Cart</button>
            </div>
          </div>

          <div className="total-block">
            <h2 style={{ color: '#ff4400a8' }}>Order Total:</h2>
            <span id="total" style={{ fontWeight: 'bolder', fontSize: 'xx-large', color: '#ff4400a8' }}>{totalPrice}</span>
            <div id='checkout-button' style={{ paddingBlock: '5rem' }}>
              <button id="goto-checkout-btn">Go to Checkout</button>
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
    </>
  );
}

export default Cart;
