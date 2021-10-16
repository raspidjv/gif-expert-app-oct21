import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import  { useEffect, useState } from 'react'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {cat}) => {

    // const [images, setImages] = useState([]);

    // console.log("gigGrid");
    // const state = useFetchGifs();
    // console.log(state);

    const {data:images, loading} = useFetchGifs(cat);

    // console.log(data);
    // console.log(loading);

    // useEffect( () => {
    //     getGifs(cat)
    //       .then( imgs => setImages(imgs) );
    // }, [ cat] )

   
    // getGifs();

    return (
        <>

        <h3 className="animate__animated animate__fadeIn">{cat}</h3>
        { loading && <p className="animate__animated animate__flash">Cargando...</p>}

        {/* {loading ? 'Cargando...': 'Carga finalizada'} */}
        <div className="card-grid">
         
            {images.map(
                (img) => {
                    return (
                        // <li key = {img.id}> {img.title}  </li>
                        <GifGridItem
                            key={img.id}
                            // img = {img} 
                            {...img} />
                    );
                }
            )}
           
        </div>
        </>
    )
}
