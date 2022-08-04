
import {Item} from './Item/Item'

const ItemList = ({listProducts}) => {
console.log(listProducts)
  return (
    
      listProducts.map(product => <Item key={product.Id} product={product} />)
    
  )

}

export {ItemList}