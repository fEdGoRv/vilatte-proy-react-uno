import { Box } from "@chakra-ui/react";
import { products } from '../../util/products'
import { customFetch } from "../../util/customFetch";
import { ItemList } from './ItemList/ItemList';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Loader } from "../Loader/Loader"
import { Encabezado } from "../Encabezado/Encabezado"
import logo from "../../assets/logoAmarillo.jpg"

const ItemListConteiner = () => {
    const p = useParams()
    const compararCategoria = (product) => {
        if (product.Categoria == p.categoria) {
            return (product)
        }
    }
    const [loading, setLoading] = useState(true)
    const [listProducts, setListProducts] = useState([])

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                setLoading(false)
                if(p.categoria){
                    setListProducts(res.filter((compararCategoria)))
                }else{
                    setListProducts(res)
                }
                
            })
    }, [p.categoria,p])

    if (loading) {
        return (
            <Loader />
        )
    } else {
        return (
            <Box>
                <Encabezado Titulo="Bienvenidos :)" Subtitulo="Visita nuestras secciones de Yoga Y Fitnes" Abatar={logo} />
                <ItemList listProducts={listProducts} />
            </Box>

        )
    }
}
export default ItemListConteiner;