
import { Item } from './Item/Item'
import { HStack } from '@chakra-ui/react'
const ItemList = ({ listProducts }) => {

  return (
    <HStack> 
      {listProducts.map(product => <Item key={product.Id} product={product} />)}
    </HStack>
  )
}

export { ItemList }