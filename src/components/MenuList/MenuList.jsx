import MenuListItem from '../MenuListItem/MenuListItem';

export default function MenuList({ menuItems, handleAddToOrder}) {
   

  return (
    <main >
      {menuItems.map(item =>
        <MenuListItem
          handleAddToOrder={handleAddToOrder}
          key={item._id}
          menuItem={item}
        />
      )};
    </main>
  );
}