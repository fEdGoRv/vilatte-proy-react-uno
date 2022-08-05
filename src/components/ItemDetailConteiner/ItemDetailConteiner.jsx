import React from 'react'
import { ItemDetail } from './ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { customFetch } from '../../util/customFetch'

export const ItemDetailConteiner = () => {
 
    const [prodcut, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const producto = { 
        Id:3,
        Titulo:"Mat 3",
        Categoria:"",
        Descripcion:"kkkkkk",
        Precio:2100,
        Url:"https://m.media-amazon.com/images/I/41nXlP1zA+L.jpg",
    }

    useEffect(()=>{
        setLoading(true)
        customFetch(producto)
        .then(()=>{
            setLoading(false)
            setProduct(producto)
        })
    },[])

    return (
        <Box>
            {!loading ? <ItemDetail key={producto.Id }producto={producto}/> : <Text>Cargando...</Text>}
        </Box>
    )
}

export default ItemDetailConteiner 