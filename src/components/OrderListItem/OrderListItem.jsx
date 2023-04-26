export default function OrderListItem({ order, isSelected, setSelectedOrder }) {
    return (
      <div
        className="card m-3"
        onClick={() => setSelectedOrder(order)}
      >
        <div>
          <div>Order Id: <span >{order.orderId}</span></div>
          <div >Order Date: {new Date(order.createdAt).toLocaleDateString()}</div>
        </div>
        <div >
          <div>Total: CA${order.orderTotal.toFixed(2)}</div>
          <div>Total Qty: {order.totalQty} Item{order.totalQty > 1 && 's'}</div>
        </div>
      </div>
    );
  }