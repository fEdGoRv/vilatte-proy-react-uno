import React from 'react'
import { ItemDetail } from './ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { customFetch } from '../../util/customFetch'
import { products } from '../../util/products'
import { useParams } from "react-router-dom"

export const ItemDetailConteiner = () => {
    const r = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    
   useEffect(() => {
        setLoading(true)
        customFetch(products)
       
            .then(res => {
                setLoading(false)
                setProduct(res.find(product=>r.id==product.Id))
            })
        }, [r.id])

    return (
        <Box>

            {!loading ? <ItemDetail product={product}/> : <Text>Cargando...</Text>}
        </Box>
    )
}

export default ItemDetailConteiner 