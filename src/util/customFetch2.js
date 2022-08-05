export const customFetch = (producto) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(producto)
        }, 2000)
    })
}