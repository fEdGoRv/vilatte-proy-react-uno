import React from 'react'
import { ItemDetail } from './ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { db } from "../../firebase/Firebase"
import { collection, getDocs, getDoc } from "firebase/firestore";
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
        const products = collection(db, "products")
        const query = getDocs(products)       
        
            .then(res => {
                setLoading(false)
                const Productos = res.docs.map(doc => {
                    return {
                        ...doc.data(), Id: doc.id
                    }
                })
                
                setProduct(Productos.find(prod=>prod.Id===r.id))   
    })}
    , [r.id])

    if (loading) {
        return (
            <Loader />
        )
    } else {
        return (
            <>
            <Encabezado Titulo="Nos Alegra que hayas encontrado lo buscabas!!" Subtitulo="Pruebalo y sino estas conforme, la devolución es sin costo :)" Abatar={logo} />
            <ItemDetail product={product} />
            </>
        )
    }
}


    export default ItemDetailConteiner 