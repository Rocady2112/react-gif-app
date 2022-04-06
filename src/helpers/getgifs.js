

export const getgifs = async(categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria)}&limit=10&api_key=nWvISAw3DWUiBF1A3b019VbtOhOz1OdW`
    // await es esperar
    const resp= await fetch(url)
    const {data}= await resp.json()
    //sacamos lo que nos interesa
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs;
}
