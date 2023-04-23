import "./MenuListItem.css"

export default function MenuListItem({ menuItem }) {
  return (
    <Link to={}>
      <div class="card">
        <img src={menuItem.imgUrls} alt={menuItem.brand} style={{width:300}}/>
            <div class="container">
                 <h4><b>{menuItem.brand} {menuItem.model}</b></h4>
                <p>${menuItem.price.toFixed(2)}</p>
                <button onClick={() => console.log('clicked')}>
                ADD
                </button>
            </div>
      </div>
    </Link>

  );
}