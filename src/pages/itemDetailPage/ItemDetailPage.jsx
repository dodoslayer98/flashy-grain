import { useParams } from "react-router-dom"
import * as itemsAPI from '../../utilities/items-api'
import * as ordersAPI from '../../utilities/orders-api';
import { useState, useEffect, useContext } from "react"
import HomePage from "../HomePage/HomePage"
import { CartContext } from "../../contexts/CartContext"

export default function ItemDetailPage(){
    const { itemId } = useParams()
    const [itemDetail,setItemDetail] = useState()
    const {cart,setCart} = useContext(CartContext)

    useEffect ( function(){
        async function getItemDetail(){
            const item = await itemsAPI.getById(itemId)
            setItemDetail(item)
        }
        getItemDetail()
        
    },[])
    
    async function handleAddToOrder(itemId) {
        const updatedCart = await ordersAPI.addItemToCart(itemId);
        setCart(updatedCart);
    }


    return(
        <div>
            <h1> {itemDetail?.brand} {itemDetail?.model}</h1>
            <img src={itemDetail?.imgUrls} alt={itemDetail?.brand} style={{width:300}}/>
            <h3>CA${itemDetail?.price}</h3>
            <h3>{itemDetail?.description}</h3>
            
            <button onClick={() => {handleAddToOrder(itemId)}}>
                Add to cart 
            </button>
        </div>

    )
}