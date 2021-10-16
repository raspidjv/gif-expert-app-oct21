import React from 'react'

export const GifGridItem = ( img) => {
    //  console.log(img);
    return (
        <div className="card animate__animated animate__heartBeat">
            {/* <li > {img.title}  </li> */}
            <img src={img.url} alt={img.title} />
            <p> {img.title}</p>
        </div>
    )
}