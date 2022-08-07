export const customFetch2 = (products, key) => {
    const p = products.find(p => p.Id == key)
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(p)
        }, 2000)
    })
}

