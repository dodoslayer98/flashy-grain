import { useParams } from "react-router-dom"
import * as itemsAPI from '../../utilities/items-api'
import * as ordersAPI from '../../utilities/orders-api';
import { useState, useEffect, useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import Carousel from 'react-bootstrap/Carousel';

export default function ItemDetailPage(){
    const { itemId } = useParams()
    const [itemDetail,setItemDetail] = useState()
    const {setCart} = useContext(CartContext)

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
            <h1 className="mt-5 mb-4"> {itemDetail?.brand} {itemDetail?.model}</h1>

            <div className="row" >

                <div className="col-8">
                    <Carousel>
                        {itemDetail?.imgUrls.map(url =>
                        <Carousel.Item>
                            <img
                            className="col-8"
                            src={url}
                            alt="camera"
                            />
                        </Carousel.Item>
                        )} 
                    </Carousel>
                </div>
                <div className="col">
                    <h5 className="text-start">CA${itemDetail?.price}</h5>
                    <p className="text-start">{itemDetail?.description}</p>
                    <button className="btn btn-danger" onClick={() => {handleAddToOrder(itemId)}}>
                         Add to cart 
                    </button>
                </div>
            </div>    

           

        </div>

    )
}