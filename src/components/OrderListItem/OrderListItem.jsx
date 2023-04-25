export default function OrderListItem({ order, isSelected, setSelectedOrder }) {
    return (
      <div
        className={`OrderListItem${isSelected ? ' selected' : ''}`}
        onClick={() => setSelectedOrder(order)}
      >
        <div>
          <div>Order Id: <span >{order.orderId}</span></div>
          <div >{new Date(order.createdAt).toLocaleDateString()}</div>
        </div>
        <div >
          <div>${order.orderTotal.toFixed(2)}</div>
          <div>{order.totalQty} Item{order.totalQty > 1 && 's'}</div>
        </div>
      </div>
    );
  }