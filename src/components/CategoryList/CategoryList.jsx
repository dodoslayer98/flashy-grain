

export default function CategoryList({ categories, activeCat, setActiveCat }) {
    const cats = categories.map(cat =>
      <span
        key={cat}
        // className={cat === activeCat ? 'active' : ''}
        // FYI, the below will also work, but will give a warning
        // className={cat === activeCat && 'active'}
        onClick={() => setActiveCat(cat)}
      >
         | {cat} |
      </span>
    );
    return (
        <div >
         {cats}
        </div>
    );
  }
  


  