import React from 'react'
import { ItemDetail } from './ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { customFetch2 } from '../../util/customFetch2'
import { products } from '../../util/products'
import { Item } from '../ItemListConteiner/ItemList/Item/Item'

export const ItemDetailConteiner = () => {
    const key = 1
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    {/* const producto = (key) => {
        products.find(product => product.Id === key);
        return (product={product})
    }
    const buscarKey = (key) =>{producto(key)}
    producto={producto} 

 <Item buscarKey={buscarKey}/>
*/}
    
   useEffect(() => {
        setLoading(true)
        customFetch2(products, key)
       
            .then(() => {
                setLoading(false)
                setProduct(res)
            })
        }, [])

    return (
        <Box>

            {!loading ? <ItemDetail key={key} product={product}/> : <Text>Cargando...</Text>}
        </Box>
    )
}

export default ItemDetailConteiner 