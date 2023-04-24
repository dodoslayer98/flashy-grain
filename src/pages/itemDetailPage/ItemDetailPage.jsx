import { useParams } from "react-router-dom"
import * as itemsAPI from '../../utilities/items-api'
import { useState, useEffect } from "react"
import HomePage from "../HomePage/HomePage"

export default function ItemDetailPage(){
    const { itemId } = useParams()
    const [itemDetail,setItemDetail] = useState()

    useEffect ( function(){
        async function getItemDetail(){
            const item = await itemsAPI.getById(itemId)
            setItemDetail(item)
        }
        getItemDetail()
        
    },[])
    
    console.log(itemDetail)

    return(
        <div>
            <h1> {itemDetail?.brand} {itemDetail?.model}</h1>
            <img src={itemDetail?.imgUrls} alt={itemDetail?.brand} style={{width:300}}/>
            <h3>CA${itemDetail?.price}</h3>
            <h3>{itemDetail?.description}</h3>
            
            <button onClick={() => console.log('clicked')}>
                Add to cart 
            </button>
        </div>

    )
}