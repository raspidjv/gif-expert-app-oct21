export const getGifs = async (cat) => {
    const api_key = 'ZXGpaSWnVAlEWYnjzAd4zvfJOT63KmWL';
    const txtsearch = encodeURI(cat); //'Uruguay';
    const giflimit='10';
    const url = 'https://api.giphy.com/v1/gifs/search?q='+txtsearch+'&limit='+giflimit+'&api_key=' + api_key;
    const resp = await fetch( url);

    console.log(url);
    
    const {data} = await resp.json();

    // console.log(data);

    const gifs = data.map( img => {
        return(
            {
             id: img.id,
             title: img.title,
             url: img.images?.downsized_medium.url
            }
        )
    })

    // console.log(gifs);
    // setImages(gifs);
    return gifs;

}
