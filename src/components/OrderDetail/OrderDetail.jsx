import LineItem from '../LineItem/LineItem';


export default function OrderDetail({ order, handleCheckout }) {
  if (!order) return null;

  const lineItems = order.lineItems.map(item =>
    <LineItem 
    lineItem={item}
    key={item._id}
    />
  );

  return (
    <div >
      <div >
        {order.isPaid ?
          <span>ORDER <span >{order.orderId}</span></span>
          :
          <span>NEW ORDER</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
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
              <span>{order.totalQty}</span>
              <span>${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div>Buy more camerassss</div>
        }
      </div>
    </div>
  );
}