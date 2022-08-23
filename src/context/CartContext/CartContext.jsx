import { useContext, createContext, useState } from "react"

const CartContext = createContext({})
export const useCartContext = () => useContext(CartContext)

export function CartContextprovider({ children }) {

  const [cartList, setCartList] = useState([])
  
  const isInCart = (id) =>  cartList.find(product => product.Id === id) 
 
  const addToCart = (product, cantidad) => {
     
    if (isInCart(product.Id)) {
      const newCart = cartList.map(prod => {
        if (product.Id === prod.Id) {
          const newCantidad = prod.Cantidad + cantidad
          return { ...prod, Cantidad: newCantidad }
        } else {
          return prod
        }
      })
      setCartList(newCart)
    } else {
      const newProduct = { ...product, Cantidad: cantidad }
      setCartList([...cartList, newProduct])
    }
   }

  const removeProduct = (id) =>{ 
    setCartList(cartList.filter(prod => prod.Id !== id))
  } 
 

  const cleanCart = () => setCartList([])

  const totalPrice = () => {
    return cartList.reduce((acc, product) => acc += product.Precio * product.Cantidad, 0)
  }

  const totalQuantity = () => {
    return cartList.reduce((acc, product) => acc += product.Cantidad , 0 )
    
  }


  return (
    <CartContext.Provider value={{
      cartList,
      addToCart,
      removeProduct,
      cleanCart,
      totalPrice,
      totalQuantity,
      isInCart
    }}>

      {children}
    </CartContext.Provider>
  )

}