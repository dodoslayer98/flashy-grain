import "./MenuListItem.css"
import { Link } from "react-router-dom";

export default function MenuListItem({ menuItem,handleAddToOrder }) {

  const handleClick = () => {
    handleAddToOrder(menuItem._id)
  }

  return (
      <div className="card">
        <img src={menuItem.imgUrls} alt={menuItem.brand} style={{width:300}}/>
            <div className="container">
            <Link to={"/item/"+ menuItem._id}> <h4><b>{menuItem.brand} {menuItem.model}</b></h4></Link>
                <p>${menuItem.price.toFixed(2)}</p>
                <button onClick={handleClick} className ="btn">
                ADD
                </button>
            </div>
      </div>
    );
}