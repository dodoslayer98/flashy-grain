import "./MenuListItem.css"
import { Link } from "react-router-dom";

export default function MenuListItem({ menuItem }) {
  return (
      <div class="card">
        <img src={menuItem.imgUrls} alt={menuItem.brand} style={{width:300}}/>
            <div class="container">
            <Link to={"/item/"+ menuItem._id}> <h4><b>{menuItem.brand} {menuItem.model}</b></h4></Link>
                <p>${menuItem.price.toFixed(2)}</p>
                <button onClick={() => console.log('clicked')}>
                ADD
                </button>
            </div>
      </div>
    );
}