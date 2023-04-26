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
            <img style={{ width: '100%', height: 'auto' }} src="https://i.etsystatic.com/isbl/dc9c21/55525406/isbl_3360x840.55525406_8qhcyl5w.jpg?version=0"/>
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