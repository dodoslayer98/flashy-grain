import OrderListItem from "../OrderListItem/OrderListItem"

export default function OrderList({ orders, selectedOrder, setSelectedOrder }) {
  const orderListItems = orders.map(orderItem =>
    <OrderListItem
      order={orderItem}
      isSelected={orderItem === selectedOrder}
      setSelectedOrder={setSelectedOrder}
      key={orderItem._id}
    />
  );
  return (
    <main className="OrderList">
      {orderListItems}
    </main>
  );
}