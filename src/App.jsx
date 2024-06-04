import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


const App = () => {
  const [categories, setCategories] = useState([ 'One Punch' ]);
  const handleAddCategory = (newCategory) => {
    setCategories([ 
      newCategory,
      ...categories
        .filter( c => c.toLowerCase().trim() != newCategory.toLowerCase().trim() )
        .slice(0, 4),
      ]);
  };
  
  return (
    <>
      
        <header className="m-auto w-1/2 flex flex-col items-center">
          <h1 className='text-5xl font-extrabold my-5'>GifExpert</h1>
          <AddCategory handleAdd={ handleAddCategory }/>
        </header>

        {
          categories.map( c => (
            <GifGrid
              key={c.toUpperCase()}
              category={c} />
            ))
        }
    </>
  );
};
export default App;