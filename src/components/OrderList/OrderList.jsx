import OrderListItem from "../OrderListItem/OrderListItem"

export default function OrderList({ orders, selectedOrder, setSelectedOrder }) {

  return (
    <main className="OrderList">
      <h2 className="mt-4">Order List</h2>
      {orders.map(orderItem =>
    <OrderListItem
      order={orderItem}
      isSelected={orderItem === selectedOrder}
      setSelectedOrder={setSelectedOrder}
      key={orderItem._id}
    />
    )}
    </main>
  );
}