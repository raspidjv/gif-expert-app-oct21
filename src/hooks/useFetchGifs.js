import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (categoria) => {

    const [state, setState] = useState({
        data:[],
        loading: true
    })

// console.log(categoria);

    useEffect( () => {

            getGifs(categoria)
              .then( imgs => {

                setTimeout( () => {
                    setState({
                        data: imgs,
                        loading: false
                    });
                    // console.log(imgs);

                },0)
              });
    }, [categoria]);

    // setTimeout( () => {
    //     setState({
    //         data:[1,2,3],
    //         loading: false
    //     });

    // },3000);

    // console.log(state);

    return state; // data[], loading: true
}
