import MenuListItem from '../MenuListItem/MenuListItem';
import "./MenuList.css"

export default function MenuList({ menuItems, handleAddToOrder}) {
   

  return (
    <main className='thumbnails container ' >
      {menuItems.map(item =>
        <MenuListItem
          handleAddToOrder={handleAddToOrder}
          key={item._id}
          menuItem={item}
        />
      )}
    </main>
  );
}