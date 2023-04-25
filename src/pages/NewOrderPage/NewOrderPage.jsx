import { useEffect, useContext } from "react"
import { CartContext } from "../../contexts/CartContext";
import * as ordersAPI from '../../utilities/orders-api';
import LineItem from '../../components/LineItem/LineItem'
import { useNavigate } from 'react-router-dom';

export default function NewOrderPage(){

    const {cart,setCart} = useContext(CartContext)
    const navigate = useNavigate();

    useEffect(function() {
        async function getCart() {
          const cart = await ordersAPI.getCart();
          setCart(cart);
        }
        getCart();  
    }, []);

    if (!cart) return null;
    async function handleCheckout() {
      await ordersAPI.checkout();
      // programatically change client-side routes
      navigate('/orders');
    }

    const lineItems = cart.lineItems.map(item =>
      <LineItem
        lineItem={item}
        isPaid={cart.isPaid}
        key={item._id}
      /> 
    );
  

    return (    
        <div>
            <h1>CART</h1>
        <div>
          {cart.isPaid ?
            <span>ORDER <span>{cart.orderId}</span></span>
            :
            <span>NEW ORDER</span>
          }
          <span>{new Date(cart.updatedAt).toLocaleDateString()}</span>
        </div>
        <div>
          {lineItems.length ?
            <>
              {lineItems}
              <section>
                {cart.isPaid ?
                  <span>TOTAL&nbsp;&nbsp;</span>
                  :
                  <button onClick={handleCheckout} disabled={!lineItems.length}>CHECKOUT</button>
                }
                <span>{cart.totalQty}</span>
                <span>${cart.orderTotal.toFixed(2)}</span>
              </section>
            </>
            :
            <div>Ya wanna buy some cameras?</div>
          }
        </div>
      </div>
    )
}  