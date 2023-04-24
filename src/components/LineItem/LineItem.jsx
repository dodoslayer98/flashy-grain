export default function LineItem({ lineItem, isPaid }) {
    return (
      <div>
        <div>{lineItem.item.brand}</div>
        <div>
          <span>{lineItem.item.model}</span>
          <span>{lineItem.item.price.toFixed(2)}</span>
        </div>
        <div style={{ justifyContent: isPaid && 'center' }}>
          {!isPaid &&
            <button onClick={() => alert('clicked')}>−</button>
          }
          <span>{lineItem.qty}</span>
          {!isPaid &&
            <button onClick={() => alert('clicked')}>+</button>
          }
        </div>
        <div>${lineItem.extPrice.toFixed(2)}</div>
      </div>
    );
  }