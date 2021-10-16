import React, { useState } from 'react'

export const AddCategory = ({setCategories} ) => {

    const [inputValue, setInputValue] = useState('');
    const [repetido, setRepetido] = useState(false);


    const handleInputchange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // para prevenir el posteo completo de la pagina y su refresh

        if( inputValue.trim().length > 0 ) {
            // setCategories( c => [...c, inputValue] );
            setCategories( c => { 
                        // si el valor de inputValue ya existe en las categorias C, no se agrega
                        // asi se evita el id duplicado
                        // const a = c.find( (e) => {
                        // //console.log(e);
                        //         return( e === inputValue);
                        // });
                        
                            const a = c.find( (e) => e === inputValue);
                            //console.log(a); // a tiene el valor si se encontro repetido o undefined si no se encontro
                            
                            if( !a) { 
                                // return [...c, inputValue];
                                setRepetido(false);
                                return [inputValue, ...c];
                               }
                            else { 
                                console.log('valor repetido, no se agrega');
                                setRepetido(true);
                                return [...c];
                            }
                       } );


            setInputValue('');
            console.log('Submit hecho');
        }

    }

    return (
        <>
        <form onSubmit = {handleSubmit}>
            {/* <h3>Add Category</h3> */}
            <input
               type="text"
               value={inputValue}
               onChange={ handleInputchange }
            />
        
               {/* { (repetido && alert('Categoria ya existe'))} */}
               { (repetido && <p>Categoria ya existe</p>)}
       
        </form>
        </>
    )
}

