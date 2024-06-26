import React, { useEffect } from 'react';
import './style.css';
import Shop from './tcgSecureImages/BxShoppingBag.svg'
import Login from './tcgSecureImages/IonPersonSharp.svg'
import Cart from './tcgSecureImages/BxCart.svg'
import Arrow from './tcgSecureImages/LineMdArrow.svg'
import FacebookIcon from './tcgSecureImages/BrandicoFacebookRect.svg'
import GithubIcon from './tcgSecureImages/BrandicoGithub.svg'
import LinkedinIcon from './tcgSecureImages/BrandicoLinkedinRect.svg'
import InstagramIcon from './tcgSecureImages/CibInstagram.svg'

export default function TcgSecure() {

    useEffect(() => {
        const initSlider = () => {
            const imageList = document.querySelector(".slider-wrapper .image-list");
            const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
            const sliderScrollBar = document.querySelector(".container-block .slider-scrollbar");
            const scrollbarThumb = document.querySelector(".scrollbar-thumb");
            const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

            scrollbarThumb.addEventListener("mousedown", (e) => {
                const startX = e.clientX;
                const thumbPosition = scrollbarThumb.offsetLeft;

                const handleMouseMove = (e) => {
                    const deltaX = e.clientX - startX;
                    const newThumbPosition = thumbPosition + deltaX;
                    const maxThumbPosition = sliderScrollBar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

                    const boundedPostition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
                    const scrollPosition = (boundedPostition / maxThumbPosition) * maxScrollLeft;

                    scrollbarThumb.style.left = `${boundedPostition}px`;
                    imageList.scrollLeft = scrollPosition;
                }

                const handleMouseUp = () => {
                    document.removeEventListener("mousemove", handleMouseMove)
                    document.removeEventListener("mouseup", handleMouseUp)
                }

                document.addEventListener("mousemove", handleMouseMove)
                document.addEventListener("mouseup", handleMouseUp)
            })

            slideButtons.forEach(button => {
                button.addEventListener("click", () => {
                    const direction = button.id === "prev-slide" ? -1.005 : 1.005;
                    const scrollAmount = imageList.clientWidth * direction;
                    imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
                })
            });

            const handleSlideButtons = () => {
                slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
                slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
            }

            const updateScrollThumbPosition = () => {
                const scrollPosition = imageList.scrollLeft;
                const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollBar.clientWidth - scrollbarThumb.offsetWidth);
                scrollbarThumb.style.left = `${thumbPosition}px`;
            }

            imageList.addEventListener("scroll", () => {
                handleSlideButtons();
                updateScrollThumbPosition();
            })
        }

        initSlider();
    }, []);

  return (
    <>
    <div class="container">
      <div>
        
      {/* header */}

        <header>
          <nav class="nav-container">
            <a href="/tcgsecure"><h2>SecureTCG</h2></a>
            <ul style={{ display: 'flex', gap: '1rem' }}>
              <a href="/shop">
                <li style={{ textAlign: 'center' }}>
                  <img className='icon-img' src={Shop} alt="shop" />
                  <span>Shop</span>
                </li>
              </a>
              <a href="/login">
                <li style={{ textAlign: 'center' }}>
                  <img className='icon-img' src={Login} alt="login" />
                  <span>Login</span>
                </li>
              </a>
              <a href="/cart">
                <li style={{ textAlign: 'center' }}>
                  <img className='icon-img' src={Cart} alt="cart" />
                  <span>Cart</span>
                </li>
              </a>
            </ul>
          </nav>
        </header>
        <div class="background-bar"></div>

      {/* carousel */}

        <div style={{ paddingTop: '6rem', marginInline: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h3>View Our Catalog</h3>
          </div>
              <div class="container-block">
                <div class="slider-wrapper">
                  <button id="prev-slide" class="slide-button"><img src={Arrow} alt="" /></button>
                  <div class="image-list">
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/541660.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/541044.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/539492.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/541665.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/541670.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/541666.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/541060.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/541064.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/541659.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/539285.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/527026.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/529850.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/527021.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/527665.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/528168.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/516555.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/515310.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/515283.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/514544.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/498484.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/501678.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/500122.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/485862.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/485255.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/485162.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/485087.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/454513.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/454536.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/454609.jpg" alt="" />
                    <img class="image-item" src="https://product-images.tcgplayer.com/fit-in/437x437/454669.jpg" alt="" />
                  </div>
                  <button id="next-slide" class="slide-button"><img src={Arrow} alt="" /></button>
                </div>
                <div class="slider-scrollbar">
                  <div class="scrollbar-track">
                    <div class="scrollbar-thumb"></div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <a href="/shop">
                    <button class="news-button">Shop Our Catalog</button>
                  </a>
                </div>
              </div>
        </div>

        {/* game information block */}
        
        {/* championship series information */}
        <div class="grid">
          <div class="grid-block">
            <img class="img-container" 
              src="https://en.onepiece-cardgame.com/images/events/2024/championship/index/img_mv.png" 
              alt="championship image" />
            <div class="text-container">
            <h2>2024 One Piece Card Game Championships</h2>
            <p>
              Compete against the nations best at a once a year tournament <br /> 
              or witness the crowning of the best ONE PIECE card game player, <br />
              the Card Game Pirate King!
            </p>
            <a class="button-position" href="https://en.onepiece-cardgame.com/events/2024/championship/">
              <button class="news-button">Sign Up Here</button>
            </a>
          </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '2rem', gap: '1rem' }}>
              <a 
              href="https://onepiecetopdecks.com/deck-list/jp-format-op-06-twin-champions-decks/deckgen/?dn=Sakazuki&date=1/21/2024&cn=Japan&au=Bee&pl=2nd%20Place&tn=2nd%20Prelims%20Final&hs=Bandai%202023%20CS%20&dg=1nOP05-041a4nOP02-114a4nST06-008a2nST06-010a4nOP02-106a4nOP03-079a4nOP03-089a2nOP04-083a4nOP05-091a4nOP05-093a4nOP06-086a1nOP05-051a4nOP06-050a3nOP02-117a4nOP05-057a2nOP06-056&cs=221">
                <img id='saka-img' class="img-container-two" src="https://product-images.tcgplayer.com/fit-in/437x437/527011.jpg" alt="" />
              </a>
              <a 
              href="https://onepiecetopdecks.com/deck-list/jp-format-op-06-twin-champions-decks/deckgen/?dn=Gecko%20Moria&date=1/20/2024&cn=Sinagpore&au=Gerrard%20Ng&pl=Top-2&tn=Flagship(5-0)&hs=Beginner%20Luck&dg=1nOP06-080a3nOP02-114a2nOP02-096a2nST06-006a2nST06-010a4nOP02-106a4nOP03-089a3nOP04-083a3nOP05-093a4nOP06-081a4nOP06-086a4nOP06-090a4nOP06-091a4nOP06-093a3nST06-015a4nOP02-117&cs=225">
                <img id='moria-img' class="img-container-two" src="https://product-images.tcgplayer.com/fit-in/437x437/541054.jpg" alt="" />
              </a>
            </div>
            <div class="text-container">
              <h2 class="text-block-style">[OP-06] Top Decks</h2>
                <div>
                  <h3 class="text-block-style">Sakazuki</h3>
                  <p class="text-block-style">Bust out high-cost finishers that remove your opponent's Characters, and use your Leader's 
                    card-swap and cost-subtraction effects to deal one blow after another.This deck merges the stability of blue's card 
                    draw with black's pressure to stifle the opponent with removal.
                  </p>
                </div>
                <div>
                  <h3 class="text-block-style">Gecko Moria</h3>
                  <p class="text-block-style">This deck's greatest asset is the ability to revive Characters from your trash at a cost lower than their 
                    original cost to establish a board advantage. Combine this with black's specialty—cost-reducing effects—to keep fighting while 
                    removing cards from the field.
                  </p>
                </div>
            </div>
          </div>

          <div class="card-grid">
            <img 
              style={{ borderRadius: '8px' }}
              class="img-container-two"
              id="child1" 
              src="https://product-images.tcgplayer.com/fit-in/437x437/541044.jpg" 
              alt="" />
            <img 
              class="img-container-two" 
              id="child2"
              src="https://product-images.tcgplayer.com/fit-in/437x437/541056.jpg" 
              alt="" />
            <img  
              class="img-container-two" 
              id="child3"
              src="https://product-images.tcgplayer.com/fit-in/437x437/513466.jpg" 
              alt="" />
            <img 
              class="img-container-two" 
              id="child4"
              src="https://product-images.tcgplayer.com/fit-in/437x437/485246.jpg" 
              alt="" />
            <img 
              class="img-container-two" 
              id="child5"
              src="https://product-images.tcgplayer.com/fit-in/437x437/541045.jpg" 
              alt="" />
            <div class="text-container">
              <h2>Deck of the week [ G/B Perona ]</h2>
              <p>
                The Black Green Perona deck aims to keep the opponent's board in check 
                with the many removal cards at its disposal. It adopts a defensive playstyle
                in the early to midgame, before slowly dominating the board presence in the game's
                later stages with the help of Gecko Moria and other high-cost Characters.
              </p>
              <a 
                class="button-position"               
                href="https://onepiecetopdecks.com/deck-list/jp-format-op1-and-st14-meta-decks/deckgen/?dn=Perona&date=3%2F23%2F2024&cn=Oceania&au=Maxwell%20Rees&pl=Top-16&tn=Regional&hs=TAK%20Games%28487%29&dg=1nOP06-021a4nOP02-114a2nOP02-096a2nST06-006a4nOP02-106a4nOP03-079a4nOP03-089a4nOP04-083a4nOP06-086a2nOP06-092a2nOP01-054a4nOP04-031a4nOP05-030a4nOP05-034a4nOP06-036a2nOP05-037&cs=217">
                <button class="news-button">Check It Out</button>
              </a>
            </div>
          </div>
          <div>
          <div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img class="img-container-three" style={{ display: 'flex', justifyContent: 'center' }} src="https://en.onepiece-cardgame.com/images/products/boosters/op06/mv_01.jpg?1" alt="" /></div>
              <div class="text-container">
                <h2>Wings of The Captain [OP-06]</h2>
                <p>
                  The 6th Booster adds Fishman Island, Thriller Bark, and Germa as a theme!
                  These cards introduce new tactics which expands the battle options even further!
                </p>
                <a class="button-position" href="https://en.onepiece-cardgame.com/cardlist/?series=569106"><button class="news-button">Check It Out</button></a>
              </div>
            </div>
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
    </>
  )
}