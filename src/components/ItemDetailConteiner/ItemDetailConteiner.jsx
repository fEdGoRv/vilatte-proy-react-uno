import React from 'react'
import { ItemDetail } from './ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { customFetch2 } from '../../util/customFetch2'
import { products } from '../../util/products'


export const ItemDetailConteiner = () => {
    const key = 1
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    
   useEffect(() => {
        setLoading(true)
        customFetch2(products, key)
       
            .then(res => {
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