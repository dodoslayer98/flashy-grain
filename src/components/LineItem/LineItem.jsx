import * as ordersAPI from '../../utilities/orders-api';
import { useContext } from "react"
import { CartContext } from '../../contexts/CartContext';


export default function LineItem({ lineItem, isPaid }) {
  
  const {setCart} = useContext(CartContext)

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }



  return (
    <div >
      <div className="flex-ctr-ctr">| {lineItem.item.brand} |</div>
      <div >
        <span className="align-ctr">|{lineItem.item.model} |</span>
        <span>| {lineItem.item.price.toFixed(2)}</span>
      </div>
      <div  style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button
            
            onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
          >−</button>
        }
        <span>{lineItem.qty}</span>
        {!isPaid &&
          <button
            
            onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
          >+</button>
        }
      </div>
      <div >${lineItem.extPrice.toFixed(2)}</div>
    </div>
  );
  }