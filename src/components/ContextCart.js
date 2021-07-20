import React,{useContext} from 'react'
import {Scrollbars} from 'react-custom-scrollbars-2';
import Items from './Items';

import { CartContext } from './Cart';

const ContextCart = () => {
    const {item,clearCart}=  useContext(CartContext)

    if(item.length){
        return(
            <>
              <header>
              <div className="continue-shopping">
                  <img src='./images/arrow.png' alt="pic" className="arrow-icon" />
                  <h3>continue shopping</h3>
              </div>

              <div className="cart-icon">
              <img src='./images/cart.png' alt="cart"  />
              <p>0</p>
              </div>

          </header>
          
          <section className="main-cart-section">
              <h1>Shopping cart</h1>
              <p className="total-items">You Have <span className="total-items-count">0 items in shopping cart </span></p>
          </section>
   


            </>
        )
    }
    return (
        <>
            <header>
              <div className="continue-shopping">
                  <img src='./images/arrow.png' alt="pic" className="arrow-icon" />
                  <h3>continue shopping</h3>
              </div>

              <div className="cart-icon">
              <img src='./images/cart.png' alt="cart"  />
              <p>7</p>
              </div>

          </header>
          
          <section className="main-cart-section">
              <h1>Shopping cart</h1>
              <p className="total-items">You Have <span className="total-items-count">7 items in shopping cart </span></p>

              <div className="cart-items">
                  <div className="cart-items-container">
                  <Scrollbars>
                  {
                      item.map((curItem)=>{
                       return  <Items key={curItem.id} {...curItem}/>
                      })
                  }
                     
                    </Scrollbars>
                  </div>
              </div>

              <div className="card-total">
                  <h3>Card Total : <span>2200rs</span></h3>
                  <button>Checkout</button>
                  <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
              </div>
          </section>
   
        </>
    )
}

export default ContextCart
