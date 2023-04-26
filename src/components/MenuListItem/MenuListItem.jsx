import "./MenuListItem.css"
import { Link } from "react-router-dom";

export default function MenuListItem({ menuItem}) {

  return (
    <>
      <div className="my-3 mx-3">
        <Link to={"/item/"+ menuItem._id}>
          <img className="rounded " src={menuItem.imgUrls[0]} alt={menuItem.brand} style={{width:300}}/>
          <p className="text-dark text-start ms-2 mt-2 mb-0" >{menuItem.brand} {menuItem.model}</p>
          <p className="text-dark text-end me-2 mt-0"><h5><b>CA${menuItem.price.toFixed(2)}</b></h5></p>
        </Link>
      </div>

    </>

    );
}