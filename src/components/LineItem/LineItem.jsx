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
    <div className='container mx-auto'>
      <div class="card mb-3" style={{width: '40rem'}}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={lineItem.item.imgUrls[0]} class="img-fluid rounded ml-2" alt={lineItem.item.brand}/>
          </div>
          <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{lineItem.item.brand}{lineItem.item.model}</h5>
            <span className='my-2' >CA${lineItem.item.price.toFixed(2)}</span>
            <div  style={{ justifyContent: isPaid && 'center' }}> Qty:
              {!isPaid &&
                <button className='btn mx-2' onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}>−</button>
              }
              <span className='m-2' >{lineItem.qty}</span>
              {!isPaid &&
                <button className='btn mx-2' onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}>+</button>
              }
            </div>
            <div className='m-2'>Total: CA${lineItem.extPrice.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
  }