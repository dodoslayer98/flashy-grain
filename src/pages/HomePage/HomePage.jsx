import * as itemsAPI from '../../utilities/items-api'
import { useState, useEffect, useRef } from "react"
import CategoryList from '../../components/CategoryList/CategoryList'; 
import MenuList from '../../components/MenuList/MenuList';


export default function HomePage({user, setUser}){
    const [items,setItems] = useState([])
    const [activeCat,setActiveCat] = useState('')
    const categoriesRef = useRef([])

    
    useEffect ( function(){
        async function getItems(){
            const filmItems = await itemsAPI.getAll()
            categoriesRef.current = [... new Set(filmItems.map(item => item.category.name))]
            setItems(filmItems)
            setActiveCat(categoriesRef.current[0])
        }
        getItems()
    },[])

    return (

        <main>
            <CategoryList           
                categories={categoriesRef.current}
                activeCat={activeCat}
                setActiveCat={setActiveCat} 
            />
            <MenuList
                menuItems={items.filter(item => item.category.name === activeCat)}
            />
        </main>
    )
}