import { useContext, createContext, useState } from "react"

const CartContext = createContext({})
export const useCartContext = () => useContext(CartContext)

export function CartContextprovider({ children }) {

  const [cartList, setCartList] = useState({})

  const isInCart = (id) => cartList.find(product => product.Id === id)

  const addToCart = (product, cantidad) => {

    if (isInCart(product.Id)) {
      const newCart = cartList.map(prod => {
        if (product.Id === prod.Id) {
          const newCantidad = prod.cantidad + cantidad
          return { ...prod, cantidad: newCantidad }
        } else {
          return prod
        }
      })
      setCartList(newCart)
    } else {
      const newProduct = { ...product, cantidad: cantidad }
      setCartList([...cartList, newProduct])
    }
  }

  const removeProduct = (id) => { cartList.filter(prod => prod.Id != id) }

  const cleanCart = setCartList([])

  const totalPrice = () => {
    return cartList.reduce((acc, product) => acc += (product.Precio * product.cantidad))
  }

  const totalQuantity = () => {
    return cartList.reduce((acc, product) => acc += (product.cantidad, 0))
  }


  return (
    <CartContext.Provider value={{
      cartList,
      addToCart,
      removeProduct,
      cleanCart,
      totalPrice,
      totalQuantity
    }}>

      {children}
    </CartContext.Provider>
  )

}