export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=3pfTzaXiTgS2XX2bH97sAPxgqtO1bNcT&q=${category}&limit=9`;
    const resp = await fetch(url);
    let { data } = await resp.json();
    data = data.map( d => ({
        id: d.id,
        title: d.title,
        url: d.images.downsized_medium.url,
    }));
    return data;
};  