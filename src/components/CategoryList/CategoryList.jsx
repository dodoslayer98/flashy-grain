import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./CategoryList.css"

export default function CategoryList({ categories, activeCat, setActiveCat }) {
    
    return (
      <div >
        {categories.map(cat =>
        <ButtonGroup  aria-label="Basic example"
          key={cat}
          className={cat === activeCat ? 'active-format my-4 mx-2' : 'mx-2 my-4 non-active-format'}
          onClick={() => setActiveCat(cat)}
          >
          <Button variant="secondary">{cat}</Button>
        </ButtonGroup> 
            )}
      </div>
    );
  }
  


  