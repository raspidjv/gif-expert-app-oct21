import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    // const categories = [ 'One punch','Samurai', 'Dragon'];
    // const [categories, setCategories] = useState([ 'One punch','Samurai', 'Dragon']);
  
    // const [categories, setCategories] = useState([ 'One punch']);
    const [categories, setCategories] = useState([ ]);

    // const handleAdd = () => {
    //   // setCategories( [...categories,'Nueva']);
    //   setCategories( c => [...c, 'Nueva']);
    // }

    return (
        <>
          <h1>GifExpertApp</h1>  
          <AddCategory  setCategories={setCategories} />
          <hr />

          {/* <button onClick={handleAdd} >Agregar</button> */}
          <ol>
            {
              categories.map( (category, i )=> {
                // return (<li key={ category + i.toString() }>{category}</li>);
                return (<GifGrid 
                  // key={category + i.toString() }
                  key={category}
                  cat={category} 
                />);
              })
            }
          </ol>
        </>
    )
}
