import * as itemsAPI from '../../utilities/items-api'
import * as ordersAPI from '../../utilities/orders-api';
import { useState, useEffect, useRef, useContext } from "react"
import CategoryList from '../../components/CategoryList/CategoryList'; 
import MenuList from '../../components/MenuList/MenuList';
import { CartContext } from '../../contexts/CartContext';

export default function HomePage({user, setUser}){
    const [items,setItems] = useState([])
    const [activeCat,setActiveCat] = useState('')
    const categoriesRef = useRef([])
    const {cart,setCart} = useContext(CartContext)

    
    useEffect ( function(){
        async function getItems(){
            const filmItems = await itemsAPI.getAll()
            categoriesRef.current = [... new Set(filmItems.map(item => item.category.name))]
            setItems(filmItems)
            setActiveCat(categoriesRef.current[0])
        }
        getItems()
    },[])

    async function handleAddToOrder(itemId) {
        const updatedCart = await ordersAPI.addItemToCart(itemId);
        setCart(updatedCart);
    }



    return (

        <main>
            <CategoryList           
                categories={categoriesRef.current}
                activeCat={activeCat}
                setActiveCat={setActiveCat} 
            />
            <MenuList
                handleAddToOrder={handleAddToOrder}
                menuItems={items.filter(item => item.category.name === activeCat)}
            />
        </main>
    )
}