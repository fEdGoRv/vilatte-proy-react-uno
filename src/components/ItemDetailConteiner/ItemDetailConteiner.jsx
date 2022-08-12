import React from 'react'
import { ItemDetail } from './ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { customFetch } from '../../util/customFetch'
import { products } from '../../util/products'
import { useParams } from "react-router-dom"
import { Loader } from '../Loader/Loader'
import { Encabezado } from '../Encabezado/Encabezado'
import logo from '../../assets/company.png'

export const ItemDetailConteiner = () => {
    const r = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        customFetch(products)

            .then(res => {
                setLoading(false)
                setProduct(res.find(product => r.id == product.Id))
            })
    }, [r.id])

    if (loading) {
        return (
            <Loader />
        )
    } else {
        return (
            <>
            <Encabezado Titulo="Nos Alegra que hayas encontado lo buscabas!!" Subtitulo="Pruebalo y no esta conforme, la devolución es sin costo :)" Abatar={logo} />
            <ItemDetail product={product} />
            </>
        )
    }
}


    export default ItemDetailConteiner 