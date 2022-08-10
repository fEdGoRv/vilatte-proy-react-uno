import { Box, Heading, Text } from "@chakra-ui/react";
import { products } from '../../util/products'
import { customFetch } from "../../util/customFetch";
import { ItemList } from './ItemList/ItemList';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Loader } from "../Loader/Loader"

const ItemListConteiner = ({ greeting }) => {
    const p = useParams()
    const compararCategoria = (listProducts) => {
        if (listProducts.Categoria == p.categoria) {
            return (listProducts)
        }
    }
    const [loading, setLoading] = useState(true)
    const [listProducts, setListProducts] = useState([])

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProducts(res.filter((compararCategoria)))
            })
    }, [p.categoria])

    if (loading) {
        return (
            <Loader />
        )
    } else {
        return (
            <Box textAlign="center">
                <Heading bg="lightgreen">
                    {greeting}
                </Heading>
                <ItemList listProducts={listProducts} />
            </Box>

        )
    }
}
export default ItemListConteiner;