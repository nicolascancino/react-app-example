const getGifts = async (category) => {
    let URL = ` https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=f2YETeMwdV2lpfecg8lbzGZbHumHOQZx`
    const response = await fetch(URL)
    const {data} = await response.json()
    const gifts = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    })
    return gifts
}

export default getGifts