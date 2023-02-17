
export let getProds = async() => {
    return await fetch('https://fakestoreapi.com/products?limit=4')
        .then(res => res.json())
        .then(json => json)
}