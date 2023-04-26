import LineItem from '../LineItem/LineItem';


export default function OrderDetail({ order, handleCheckout }) {
  if (!order) return null;

  const lineItems = order.lineItems.map(item =>
    <LineItem 
    isPaid={order.isPaid}
    lineItem={item}
    key={item._id}
    />
  );

  return (
    <div >
      <div className='mb-4'>
        {order.isPaid ?
          <span>Order Id: <span >{order.orderId}</span></span>
          :
          <span>New Order</span>
        }
      </div>
      <div >
        {lineItems.length ?
          <>
            {lineItems}
            <section >
              {order.isPaid ?
                <span >TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >CHECKOUT</button>
              }
              <span>CA${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div>No Past Orders</div>
        }
      </div>
    </div>
  );
}