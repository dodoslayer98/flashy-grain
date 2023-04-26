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
        <div className="container" >
            <h1 className='mt-5 mb-4 text-start mx-4'>CART</h1>
        <div className='mb-4 text-start mx-4'>
          {cart.isPaid ?
            <span >ORDER <span >{cart.orderId}</span></span>
            :
            <span >NEW ORDER</span>
          }
        </div>
        <div>
          {lineItems.length ?
            <>
              {lineItems}
              <section>
                <p>Total: CA${cart.orderTotal.toFixed(2)}</p>
                {cart.isPaid ?
                  <span>TOTAL&nbsp;&nbsp;</span>
                  :
                  <button className="btn btn-outline-danger mb-5" onClick={handleCheckout} disabled={!lineItems.length}>CHECKOUT</button>
                }
              </section>
            </>
            :
            <div className="text-start mx-4">No Items in Cart</div>
          }
        </div>
      </div>
    )
}  