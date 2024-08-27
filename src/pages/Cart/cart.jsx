import React, { useContext } from "react";
import { StoreContext } from "../../context/storecontext";
import "./cart.css";
import { food_list } from "../../images/assets";

function Cart() {
  const { cartitems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="cart" id='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>
        cartitems[item._id]>0?
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartitems[item._id]}</p>
                  <p>${item.price * cartitems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
                </div> 
                <hr /> 
              </div>
          :
              ""

            
         
        )}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />


            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <p>Total</p>
              <p>{getTotalCartAmount()+2}</p>
            </div>
            
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>

        
        
      </div>
    </div>
  );
}

export default Cart;
